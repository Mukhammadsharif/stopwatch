import React, {useRef} from 'react';
import Background from '../images/backgrounds/detail-background.png';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import {
  BackIcon,
  Logo,
  PauseIcon,
  RefreshIcon,
  ResumeIcon,
} from '../components/Svgs';
import {useNavigation} from '@react-navigation/native';
import StopwatchTimer from 'react-native-animated-stopwatch-timer';
import TimeImage from '../images/icons/sekundant.png';

const {height} = Dimensions.get('window');

export default function Timer() {
  const navigation = useNavigation();

  const stopwatchTimerRef = useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background} style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              stopwatchTimerRef.current?.reset();
              navigation.goBack();
            }}>
            <BackIcon />
          </TouchableOpacity>

          <Logo style={styles.logo} />

          <View style={{width: 40}} />
        </View>

        <View style={styles.content}>
          <StopwatchTimer
            ref={stopwatchTimerRef}
            containerStyle={styles.stopWatchContainer}
            digitStyle={Platform.select({
              ios: {
                width: 32,
              },
              android: undefined,
            })}
            separatorStyle={Platform.select({
              ios: {
                width: 14,
              },
              android: undefined,
            })}
            textCharStyle={styles.stopWatchChar}
            trailingZeros={2}
          />

          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => stopwatchTimerRef.current?.play()}>
              <ResumeIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => stopwatchTimerRef.current?.pause()}>
              <PauseIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => stopwatchTimerRef.current?.reset()}>
              <RefreshIcon />
            </TouchableOpacity>
          </View>

          <Image source={TimeImage} style={styles.timeImage} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 25,
    marginTop: 20,
  },
  image: {
    width: '90%',
    height: '40%',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 12,
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
  textContainer: {
    width: '90%',
    marginTop: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    marginTop: 10,
  },
  time: {
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    color: 'white',
    marginTop: 10,
  },
  count: {
    fontSize: 17,
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Montserrat-Light',
    color: 'white',
    marginTop: 10,
  },
  stopWatchContainer: {
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 24,
    marginTop: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 48,
  },
  stopWatchChar: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#9CCC65',
  },
  timeImage: {
    width: '100%',
    resizeMode: 'contain',
  },
});
