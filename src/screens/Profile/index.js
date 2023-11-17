import React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';

const Profile = () => {
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
      <View style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 10, gap:20 }}>
      <Image
        source={require('../../images/pekpek.jpg')}
        style={{
          width: 100,
          height: 100,
          marginBottom: 10,
          borderRadius:10,
        }}
      />
      <Image
        source={require('../../images/mieaceh.jpg')}
        style={{
          width: 100,
          height: 100,
          marginBottom: 10,
          borderRadius:10,
        }}
      />
      <Image
        source={require('../../images/rawon.jpg')}
        style={{
          width: 100,
          height: 100,
          marginBottom: 10,
          borderRadius:10,
        }}
      />
      <Image
        source={require('../../images/lumpia.jpg')}
        style={{
          width: 100,
          height: 100,
          marginBottom: 10,
          borderRadius:10,
        }}
      />
      </View>
      </ScrollView>
    </View>
  );
};

export default Profile;