import React, { useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import CarouselItem from '@/components/molecules/DashboardMolecules/CarouselItem';
import BackgroundDispoCard from '@/components/molecules/DashboardMolecules/BackgroundDispoCard';

// Importez vos images SVG ici
import CarouseItemSVG from '../theme/assets/images/CarouseItem.svg';
import Card from '../theme/assets/images/card.svg';
import Logo from '../theme/assets/images/logo.svg';
import CardFacture from '@/components/atoms/dashboardAtoms/CardFacture';
import CardFondGarentie from '@/components/atoms/dashboardAtoms/CardFondGarentie';
import MainTabNavigator from '@/navigators/MainTabNavigator';

const { height, width } = Dimensions.get('window');
const images = Array(5).fill(CarouseItemSVG); 

const Dashboard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Logo style={styles.LogoContainer}/>
      <BackgroundDispoCard />
      <CarouselItem data={images} currentIndex={currentIndex} onIndexChanged={setCurrentIndex} />
     
      <View style={styles.cardContainer}>
        <Card />
        <View style={styles.cardInformationContainer}>
          <CardFacture style={styles.firstCardInfo} />
          <CardFondGarentie style={styles.secondCardInfo}/>
          

        </View>
      </View>
       <MainTabNavigator/>  

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
   LogoContainer: {
    marginTop: -70, 
  },
  cardContainer: {
    marginTop: -300, 
  },
  cardInformationContainer: {
    marginTop: -600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstCardInfo: {
    marginTop: 300,
    backgroundColor: 'white' 
  },
  secondCardInfo: {
    marginTop: 10,
    backgroundColor: 'white' 
  },
 thirdCardInfo: {
    marginTop: 10,
    backgroundColor: 'white' 
  },
 forthCardInfo: {
    marginTop: 10,
    backgroundColor: 'white'
  },
});

export default Dashboard;
