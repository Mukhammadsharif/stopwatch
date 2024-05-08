import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import BackgroundImage from '../images/backgrounds/leg-background.png';
import {BackIcon, Logo} from '../components/Svgs';
import {useNavigation} from '@react-navigation/native';
import {trainings} from '../trainings/trainings';
import TrainingCard from '../components/TrainingCard';

const {height, width} = Dimensions.get('window');

export default function Leg() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={BackgroundImage}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon style={styles.burger} />
          </TouchableOpacity>

          <Logo style={styles.logo} />

          <View style={{width: 40}} />
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          {trainings.leg_workout?.map((item, index) => (
            <TrainingCard training={item} key={index} routeName={'Leg'} />
          ))}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
  },
  background: {
    flex: 1,
    height: height,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  logo: {
    alignSelf: 'center',
  },
  content: {
    paddingBottom: 100,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },
});
