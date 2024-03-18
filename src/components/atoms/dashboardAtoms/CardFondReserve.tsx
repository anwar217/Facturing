import React from 'react';
import { View, StyleSheet, ViewStyle, Text } from 'react-native';
import ProgresseBarFond from './ProgresseBarFond';

const CardFondReserve: React.FC<{ style: ViewStyle  }> = ({ style}) => {

  return (
    <View style={[styles.CardFondGarentie, style]}>
      <View>
      <ProgresseBarFond/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    CardFondGarentie: {
    width: '90%',
    height: '8%',
    marginLeft: 8,
    marginTop: 450.45,
    backgroundColor: '#000000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardFondReserve;
