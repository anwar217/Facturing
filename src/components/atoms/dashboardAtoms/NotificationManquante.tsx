import React from 'react';
import { View, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const CustomView = () => {
  return (
    <View
      style={styles.container}
    >
      <SvgUri
        width="100%"
        height="100%"
        source={require('../theme/assets/images/notification.svg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '8%', 
    height: '10%',  
    marginLeft: 158, 
    marginTop: 33,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default CustomView;
