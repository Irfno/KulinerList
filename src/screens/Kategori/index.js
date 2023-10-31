import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {Home, Category, Profile} from 'iconsax-react-native';

const Kategori = () => {
  const [kategori] = useState([
    {
      nama: 'Makanan Ringan',
    },
    {
      nama: 'Makanan Utama',
    },
    {
      nama: 'Makanan Penutup',
    },
  ]);

  const [makananRingan] = useState([
    {
      namaMakanan: 'Kue Putu',
      author: 'Jawa Timur',
      image: require('../../images/kueputu.jpg'),
    },
    {
      namaMakanan: 'Lumpia',
      author: 'Semarang',
      image: require('../../images/lumpia.jpg'),
    },
    {
      namaMakanan: 'Dodol',
      author: 'Garut',
      image: require('../../images/dodol.jpg'),
    },
    {
      namaMakanan: 'Serabi',
      author: 'Solo',
      image: require('../../images/serabi.jpeg'),
    },
  ]);
  const [makananUtama] = useState([
    {
      namaMakanan: 'Gudeg',
      author: 'Jawa Timur',
      image: require('../../images/gudeg-2.jpg'),
    },
    {
      namaMakanan: 'Mie Aceh',
      author: 'Aceh',
      image: require('../../images/mieaceh.jpg'),
    },
    {
      namaMakanan: 'Rawon',
      author: 'Jawa Timur',
      image: require('../../images/rawon.jpg'),
    },
    {
      namaMakanan: 'Soto Lamongan',
      author: 'Jawa Timur',
      image: require('../../images/sotolamongan.jpg'),
    },
  ]);

  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <ScrollView>
        <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
        <View style={{marginHorizontal: 20, marginBottom: 20, marginTop: 20}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: '#212121'}}>
            Kategori
          </Text>
        </View>
        <View>
          <FlatList
            data={kategori}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginLeft: 10}}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  marginRight: 5,
                  backgroundColor: '#fff',
                  elevation: 3,
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                  marginBottom: 10,
                  borderRadius: 15,
                  marginLeft: 5,
                }}>
                <Text style={{color: '#212121'}}>{item.nama}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#212121',
                marginHorizontal: 20,
                marginBottom: 5,
                marginTop: 10,
              }}>
              Makanan Ringan
            </Text>
          </View>
          <FlatList
            data={makananRingan}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginLeft: 10}}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  marginRight: 5,
                  backgroundColor: '#fff',
                  elevation: 3,
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                  marginBottom: 10,
                  borderRadius: 15,
                  marginLeft: 5,
                }}>
                <ImageBackground
                  source={item.image}
                  style={{
                    width: 200,
                    height: 150,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 3,
                  }}
                  resizeMode={'stretch'}>
                </ImageBackground>
                <Text
                  style={{
                    color: '#212121',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {item.namaMakanan}
                </Text>
                <Text>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#212121',
                marginHorizontal: 20,
                marginBottom: 5,
                marginTop: 10,
              }}>
              Makanan Utama
            </Text>
          </View>
          <FlatList
            data={makananUtama}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginLeft: 10}}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  marginRight: 5,
                  backgroundColor: '#fff',
                  elevation: 3,
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                  marginBottom: 10,
                  borderRadius: 15,
                  marginLeft: 5,
                }}>
                <ImageBackground
                  source={item.image}
                  style={{
                    width: 200,
                    height: 150,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 3,
                  }}
                  resizeMode={'stretch'}>
                </ImageBackground>
                <Text
                  style={{
                    color: '#212121',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {item.namaMakanan}
                </Text>
                <Text>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Kategori;
