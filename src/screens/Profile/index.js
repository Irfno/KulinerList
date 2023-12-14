import { StackActions, useNavigation } from '@react-navigation/native';
import { Edit } from 'iconsax-react-native';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth'

const Profile = () => {
  const navigation = useNavigation()

  async function logout() {
    try {
      await auth().signOut()
    } catch (e) {
      console.log(e);
    }
    navigation.dispatch(StackActions.replace('Login'))
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#212121' }}>
          Profile
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image
          source={require('../../images/pp.jpg')}
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            marginBottom: 10,
          }}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#212121' }}>
          Irfani Muhamad Al Rizqi
        </Text>
        <Text style={{ color: '#bdbdbd' }}>irfn1922e@email.com</Text>
      </View>

      <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#212121' }}>
          My Favorite Dishes
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 10, gap: 20 }}>
          <Image
            source={require('../../images/pekpek.jpg')}
            style={{
              width: 100,
              height: 100,
              marginBottom: 10,
              borderRadius: 10,
            }}
          />
          <Image
            source={require('../../images/mieaceh.jpg')}
            style={{
              width: 100,
              height: 100,
              marginBottom: 10,
              borderRadius: 10,
            }}
          />
          <Image
            source={require('../../images/rawon.jpg')}
            style={{
              width: 100,
              height: 100,
              marginBottom: 10,
              borderRadius: 10,
            }}
          />
          <Image
            source={require('../../images/lumpia.jpg')}
            style={{
              width: 100,
              height: 100,
              marginBottom: 10,
              borderRadius: 10,
            }}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonSignOut} onPress={logout}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgb(255, 81, 9)',
          padding: 16,
          position: 'absolute',
          bottom: 24,
          right: 24,
          borderRadius: 10,
          elevation: 2,
        }}
        onPress={() => navigation.navigate("AddMenu")}
      >
        <Edit color='#FFF' variant='Linear' size={20} />
      </TouchableOpacity>

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  buttonSignOut: {
    marginBottom: 128,
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: '#ff5109',
    borderRadius: 30,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
    letterSpacing: 0.4,
  },
})