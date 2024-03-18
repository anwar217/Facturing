import React, { FC } from 'react';
import { View, FlatList, Dimensions, Text, ImageSourcePropType, Image } from 'react-native';
import Touchable from '@/components/atoms/dashboardAtoms/touchable';
import Svg, { SvgProps } from 'react-native-svg';
import Contract from '@/services/Contrats/ContratModel';

interface CarouselItemProps {
  data: SvgProps[];
  currentIndex: number;
  onIndexChanged: (index: number) => void;
}

const { height, width } = Dimensions.get('window');

const CarouselItem: FC<CarouselItemProps> = ({ data, currentIndex, onIndexChanged }) => {
  const itemSpacing = 15; // Ajustez cette valeur pour contrôler l'espacement
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
          const contract = item as Contract;

          return (
            <View
              key={index}
              style={{
                marginRight: index === data.length - 1 ? 0 : itemSpacing, // Retirer l'espacement pour le dernier élément
              }}
            >
             <Touchable>
                <View style={{ alignItems: 'center' }}>
                  {typeof item === 'function' ? (
                    <View style={{ }}>
                     {(item as FC<SvgProps>)()} 
                     {JSON.stringify(item)}
                   
      
              <Text style={{ position: 'absolute', bottom: 60, right: 70,color: 'white' ,marginBottom: 10, fontFamily:'Lato' ,fontWeight:'normal'}}>Contrat N°: {contracts[index].number}</Text>
              <Text style={{position: 'absolute', right: '20%',color: 'white' , bottom: '20%' , fontFamily:'Lato', fontWeight:'bold'}}> {contracts[index].amount} DNT</Text>

                     
                    </View>
                  ) : (
                    <Image source={item as ImageSourcePropType} style={{ width: '100%', height: '100%' }} />
                  )}
                </View>
              </Touchable>
            </View>
          );
        }}
      />


     

      {/* Indicateurs de points */}
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: bottomMargin, // Ajuster la marge pour les points
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

// Dans un composant parent ou dans l'endroit où vous utilisez CarouselItem:

// Création de 6 contrats
const contracts: Contract[] = [
  new Contract(1, 6553567876),
  new Contract(2, 1244576899),
  new Contract(3, 3000),
  new Contract(4, 4000),
  new Contract(5, 5000),
  new Contract(6, 6000),
];

// Utilisation de CarouselItem avec les contrats créés
