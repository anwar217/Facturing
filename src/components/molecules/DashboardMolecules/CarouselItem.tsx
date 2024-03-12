import React, { FC } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  Image,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';
import Touchable from '@/components/atoms/dashboardAtoms/touchable';
import Svg, { SvgProps } from 'react-native-svg';

interface CarouselItemProps {
  data: (ImageSourcePropType | React.FC<SvgProps>)[];
  currentIndex: number;
  onIndexChanged: (index: number) => void;
}

const { height, width } = Dimensions.get('window');

const CarouselItem: FC<CarouselItemProps> = ({ data, currentIndex, onIndexChanged }) => {
  const itemSpacing = 15; // Adjust this value to control spacing
  const bottomMargin = '80%'; 

  return (
    <View style={{ height: height / 2 + 100, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={(e) => {
          const x = e.nativeEvent.contentOffset.x;
          onIndexChanged(Math.round(x / width));
        }}
        horizontal
        contentContainerStyle={{ alignItems: 'center' }}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              style={{
                marginRight: index === data.length - 1 ? 0 : itemSpacing, // Remove spacing for last item
              }}
            >
              <Touchable>
                {typeof item === 'function' ? (
                  <View style={{ }}>
                    {(item as FC<SvgProps>)()}
                  </View>
                ) : (
                  <Image source={item as ImageSourcePropType} style={{ width: '100%', height: '100%' }} />
                )}
              </Touchable>
            </View>
          );
        }}
      />

      {/* Indicator dots */}
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: bottomMargin, // Adjust margin for dots
        }}
      >
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: currentIndex === index ? 50 : 8,
                height: currentIndex === index ? 10 : 8,
                borderRadius: currentIndex === index ? 5 : 4,
                backgroundColor: currentIndex === index ? '#1C5E85' : 'gray',
                marginLeft: 5,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default CarouselItem;
