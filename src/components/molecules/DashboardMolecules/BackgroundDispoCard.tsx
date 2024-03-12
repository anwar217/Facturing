import Card from '@/components/atoms/dashboardAtoms/DisponibleCard';
import React, { useState } from 'react';
import { View } from 'react-native';


const BackgroundDispoCard = () => {
  const [activeCard, setActiveCard] = useState(1); // Initialiser activeCard à 1

  const handleCardPress = (card: number) => {
    setActiveCard(card);
  };

  return (
    <View
      style={{
        width: '90%',
        height: '6%',
        alignSelf: 'center',
        marginTop: '20%',
        backgroundColor: '#E4EAF0',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100
      }}
    >
      <Card
        isActive={activeCard === 1}
        onPress={() => handleCardPress(1)}
        text="disponible 1"
      />
      <Card
        isActive={activeCard === 2}
        onPress={() => handleCardPress(2)}
        text="disponible 2"
      />
    </View>
  );
};

export default BackgroundDispoCard;
