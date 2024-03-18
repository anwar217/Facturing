import Dashboard from '@/screens/Dashboard';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

StatusBar.setBarStyle('dark-content');

const ThemeScreen: React.FC = (props,navigation) => {
    const [type, setType] = useState<'down' | 'up'>('down');

    const onClickButton = () => {
        if (type === 'up') {
            setType('down');
        } else {
            setType('up');
        }
    };

    const _renderIcon = (routeName: string, selectedTab: string) => {
        let icon = '';
    
        switch (routeName) {
            case 'title1':
                icon = 'home';
                break;
            case 'title2':
                icon = 'apps';
                break;
            case 'title3':
                icon = 'bar-chart';
                break;
            case 'title4':
                icon = 'person';
                break;
        }

        return (
            <Ionicons  name="alarm" size={23} color={routeName === selectedTab ? '#FF3030' : 'gray'} />
        );
    };
    

    return (
        <View style={styles.container}>
            <CurvedBottomBar.Navigator
                style={[type === 'down' && { backgroundColor: '#F5F5F5' }]}
                type='DOWN'
                height={60}
                circleWidth={55}
                bgColor="white"
                borderTopLeftRight={true}
                initialRouteName="title1"
                renderCircle={() => (
                    <TouchableOpacity
                        style={[type === 'down' ? styles.btnCircle : styles.btnCircleUp]} onPress={onClickButton}
                    >
                        <Ionicons  name="chatbubbles-outline" size={23} />
                    </TouchableOpacity>
                )}
                tabBar={({ routeName, selectedTab }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation(routeName)}
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        >
                            {_renderIcon(routeName, selectedTab)}
                        </TouchableOpacity>
                    );
                }}>
                <CurvedBottomBar.Screen
                    name="title1"
                    position="LEFT"
                    component={() =>< Dashboard />}
                />
                <CurvedBottomBar.Screen
                    name="title2"
                    component={() => <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />}
                    position="LEFT"
                />
                <CurvedBottomBar.Screen
                    name="title3"
                    component={() => <View style={{ backgroundColor: '#BFEFFF', flex: 1 }} />}
                    position="RIGHT"
                />
                <CurvedBottomBar.Screen
                    name="title4"
                    component={() => <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />}
                    position="RIGHT"
                />
            </CurvedBottomBar.Navigator>
        </View>
    );
};

export default ThemeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
        bottom: 28,
    },
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        bottom: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: '#48CEF6',
    },
    img: {
        width: 30,
        height: 30,
    },
});
