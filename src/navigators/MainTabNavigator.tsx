import React, { useRef, useState } from 'react';
import { Animated, Dimensions, Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const tabWidth = getWidth();
  const [isCardVisible, setIsCardVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleTabPress = (index: number) => {
    setActiveTabIndex(index);
    // Calculer l'offset pour centrer la vue animée sur l'icône respective
    let offset = 0;
    if (index === 3) { // Notifications
      offset = tabWidth / 2;
    } else if (index === 4) { // Settings
      offset = tabWidth;
    }
    Animated.spring(tabOffsetValue, {
      toValue: index * tabWidth + offset,
      useNativeDriver: true
    }).start();
  };

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
    Animated.timing(fadeAnim, {
      toValue: isCardVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: 'white',
              position: 'absolute',
              bottom: 40,
              marginHorizontal: 20,
              height: 60,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOpacity: 0.06,
              shadowOffset: {
                width: 10,
                height: 10,
              },
              paddingHorizontal: 20,
            }
          }}
        >
          <Tab.Screen name={"Home"} component={HomeScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ position: 'absolute', top: 20 }}>
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? '#013467' : 'gray'}
                />
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            tabPress: () => handleTabPress(0)
          })} />
          <Tab.Screen name={"Search"} component={SearchScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ position: 'absolute', top: 20 }}>
                <FontAwesome5
                  name="search"
                  size={20}
                  color={focused ? '#013467' : 'gray'}
                />
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            tabPress: () => handleTabPress(1)
          })} />
          <Tab.Screen name={"ActionButton"} component={EmptyScreen}  options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: '#013467',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 50 : 30
              }}>
                <TouchableOpacity onPress={() => toggleCardVisibility()}>
                  <Image source={require('../theme/assets/images/plus.png')} style={{
                    width: 22,
                    height: 22,
                    tintColor: 'white',
                  }} />
                </TouchableOpacity>
              </View>
            )
          }} />
          <Tab.Screen name={"Notifications"} component={NotificationScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ position: 'absolute', top: 20 }}>
                <FontAwesome5
                  name="bell"
                  size={20}
                  color={focused ? '#013467' : 'gray'}
                />
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            tabPress: () => handleTabPress(3)
          })} />
          <Tab.Screen name={"Settings"} component={SettingsScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ position: 'absolute', top: 20 }}>
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color={focused ? '#013467' : 'gray'}
                />
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            tabPress: () => handleTabPress(4)
          })} />
        </Tab.Navigator>
        {/* Animated View for Tab Indicator */}
        <Animated.View style={{
          width: tabWidth - 20,
          height: 2,
          backgroundColor: '#013467',
          position: 'absolute',
          bottom: '7%',
          left: '5%',
          transform: [{ translateX: tabOffsetValue }]
        }} />
      </NavigationContainer>
      {/* Card Component */}
      {isCardVisible && (
        <Animated.View style={{
          width: '100%',
          height: Dimensions.get('window').height / 4,
          borderRadius: 20,
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 62,
          marginBottom: 2,
          opacity: fadeAnim,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ color: 'black' }}>Card Content</Text>
        </Animated.View>
      )}
    </View>
  );
}


function getWidth() {
  let width = Dimensions.get("window").width;
  width = width - 80;
  return width / 5;
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}