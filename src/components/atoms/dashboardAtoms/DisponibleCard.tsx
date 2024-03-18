import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface CardProps {
  isActive: boolean;
  onPress: () => void;
  text: string;
}

const Card: React.FC<CardProps> = ({ isActive, onPress, text }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
        overflow: 'hidden', // Pour masquer le contenu en dehors de la carte
      }}
    >
      <View
        style={{
          backgroundColor: isActive ? 'white' : 'transparent',
          padding: 10,
          borderRadius: 10, 
          width: '100%', 
          height: 50,  
          justifyContent: 'center', 
          alignItems: 'center', 
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 12 }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
