import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../images/backgrounds/onboarding-background-1.png';
import CategoryFirst from '../images/categories/arm.png';
import CategorySecond from '../images/categories/leg.png';
import CategoryThird from '../images/categories/thigh.png';
import {Burger, Logo, PlayIcon} from '../components/Svgs';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

export default function Main() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={Background}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Burger />
          </TouchableOpacity>

          <Logo style={styles.logo} />

          <View style={{width: 40}} />
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('Arm')}>
            <Image source={CategoryFirst} style={styles.categoryImage} />
            <View style={styles.categoryRow}>
              <Text style={styles.categoryText}>Тренировки для рук</Text>
              <PlayIcon />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.category, {backgroundColor: '#2F80EC'}]}
            onPress={() => navigation.navigate('Leg')}>
            <Image source={CategorySecond} style={styles.categoryImage} />
            <View style={styles.categoryRow}>
              <Text style={[styles.categoryText, {color: 'white'}]}>
                Тренировки для ног
              </Text>
              <PlayIcon />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.category, {backgroundColor: '#AEFFB6'}]}
            onPress={() => navigation.navigate('Thigh')}>
            <Image source={CategoryThird} style={styles.categoryImage} />
            <View style={styles.categoryRow}>
              <Text style={styles.categoryText}>Тренировки для бедер</Text>
              <PlayIcon />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
  },
  background: {
    flex: 1,
    height: height,
    width: width,
  },
  category: {
    width: '85%',
    backgroundColor: '#FFF50A',
    height: 170,
    borderRadius: 15,
    marginTop: 15,
  },
  categoryImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  categoryText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#000000',
  },
  categoryRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  content: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50,
    height: '80%',
  },
  logo: {
    alignSelf: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 15,
  },
});
