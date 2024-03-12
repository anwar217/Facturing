import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const App: React.FC = () => {
  const progress = 0.5; // Valeur de progression fixe

  return (
    <View style={styles.container}>
      <ProgressBar
        progress={progress}
        width={300}
        height={5}
        borderRadius={10}
        color={'#F39C12'} // Couleur de la barre de progression
        unfilledColor={'#FFFFF'} // Couleur du reste de la barre de progression en vert
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
