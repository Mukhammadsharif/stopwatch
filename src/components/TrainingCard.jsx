import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {PlayIcon} from './Svgs';
import {useNavigation} from '@react-navigation/native';

export default function TrainingCard({training, routeName}) {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={training.image} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{training.name}</Text>

        <Text style={styles.description}>
          {training.description?.substring(0, 50)}...
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TrainingDetail', {training, routeName})
          }>
          <PlayIcon style={styles.playIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '85%',
    backgroundColor: '#FFF50A',
    height: 170,
    borderRadius: 15,
    marginTop: 15,
    flexDirection: 'row',
  },
  cardImage: {
    width: '50%',
    height: '100%',
    borderRadius: 15,
    resizeMode: 'cover',
  },
  cardText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#000000',
  },
  textContainer: {
    width: '50%',
    padding: 10,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'left',
    color: '#000000',
  },
  description: {
    fontSize: 12,
    fontFamily: 'Montserrat-Light',
    textAlign: 'left',
    marginTop: 15,
    color: '#000000',
  },
  playIcon: {
    alignSelf: 'flex-end',
  },
});
