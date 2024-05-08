import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Platform,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import CloseIcon from './images/icons/close-white.png';
import Background from './images/backgrounds/main-background.png';
import Main from './screens/Main';
import Arm from './screens/Arm';
import Leg from './screens/Leg';
import Thigh from './screens/Thigh';
import TrainingDetail from './screens/TrainingDetail';
import Timer from './screens/Timer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const {height, width} = Dimensions.get('window');

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          options={{headerShown: false}}
          component={DrawerNavigator}
          name="DrawerNavigator"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerNavigator {...props} />}>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Arm" component={Arm} />
      <Drawer.Screen name="Leg" component={Leg} />
      <Drawer.Screen name="Thigh" component={Thigh} />
      <Drawer.Screen name="TrainingDetail" component={TrainingDetail} />
      <Drawer.Screen name="Timer" component={Timer} />
    </Drawer.Navigator>
  );
}

function CustomDrawerNavigator(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <ImageBackground source={Background} style={styles.container}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image source={CloseIcon} style={styles.close} />
          </TouchableOpacity>
        </View>

        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Main')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Главная</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Arm')}
            style={styles.drawerItem}>
            <Text style={styles.itemTextSecondary}>Тренировки для рук</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Leg')}
            style={styles.drawerItem}>
            <Text style={styles.itemTextSecondary}>Тренировки для ног</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Thigh')}
            style={styles.drawerItem}>
            <Text style={styles.itemTextSecondary}>Тренировки для бедер</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Timer')}
            style={styles.drawerItem}>
            <Text style={styles.itemTextSecondary}>Ваш секундант</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? height : height,
  },
  mainContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: height / 10,
  },
  drawerItem: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginTop: 7,
  },
  itemText: {
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
    lineHeight: 28,
    color: 'white',
  },
  itemTextSecondary: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    lineHeight: 28,
    color: 'white',
  },
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'Montserrat-Medium',
  },
  transform: {
    transform: 'scale(0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 30,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 20,
    top: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  close: {
    width: 20,
    height: 20,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 10,
  },
  drawerLogo: {
    aspectRatio: 0.5,
    resizeMode: 'contain',
  },
  basket: {
    width: 50,
    height: 50,
    marginTop: height / 5,
  },
});
