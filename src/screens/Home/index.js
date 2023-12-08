import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
const HomeScreens = () => {
  const [kategori, KategoriList] = useState([
    {
      nama: 'Sumatera',
    },
    {
      nama: 'Jawa',
    },
    {
      nama: 'Kalimantan',
    },
    {
      nama: 'Bali',
    },
    {
      nama: 'Nusa Tenggara',
    },
    {
      nama: 'Sulawesi',
    },
    {
      nama: 'Papua',
    },
  ]);


  const [dataTrending, kategoriSeleksi, setKategoriSeleksi] = useState([
    {
      namaMakanan: 'Empek Empek',
      author: 'Sumatera Selatan',
      image: require('../../images/pekpek.jpg'),
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
    {
      namaMakanan: 'Mie Aceh',
      author: 'Aceh',
      image: require('../../images/mieaceh.jpg'),
    },
    {
      namaMakanan: 'Gudeg',
      author: 'DI Yogyakarta',
      image: require('../../images/gudeg-2.jpg'),
    },
  ]);

  const nav = useNavigation()
  const [menuData, setMenuData] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    tampilData()
  }, [count])

  async function tampilData() {
    try {
      const data = await fetch('https://65730399192318b7db416788.mockapi.io/kList/Menu/')
      const response = await data.json()
      setMenuData(response)
      setCount(count+1)
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ScrollView>
        <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
        <View style={{ marginHorizontal: 20, marginBottom: 20, marginTop: 20 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#212121' }}>
            Kuliner<Text style={{ color: 'rgb(255, 81, 9)' }}>List</Text>
          </Text>
        </View>
        <View>
          <FlatList
            data={kategori}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: 10 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  marginRight: 5,
                  backgroundColor:
                    kategoriSeleksi.nama == item.nama ? 'rgb(255, 81, 9)' : '#fff',
                  elevation: 3,
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                  marginBottom: 10,
                  borderRadius: 15,
                  marginLeft: 5,
                }}
                onPress={() => setKategoriSeleksi(item)}>
                <Text
                  style={{
                    color:
                      kategoriSeleksi.nama == item.nama ? '#fff' : '#212121',
                  }}>
                  {item.nama}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 10,
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#212121' }}>
              Makanan Populer
            </Text>
          </View>

          <TouchableOpacity
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{ fontSize: 14 }}>Lihat Semua</Text>
            {/* <Icon name="chevron-forward" size={20} color="#bdbdbd" /> */}
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={dataTrending}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: 10 }}
            renderItem={({ item }) => (
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
                }}
                onPress={() => nav.navigate('Detail')}
              >
                <Image
                  source={item.image}
                  style={{
                    width: 200,
                    height: 150,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 3,
                  }}
                  resizeMode={'stretch'}
                />
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

        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 10,
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#212121' }}>
              Makanan Ringan
            </Text>
          </View>
        </View>

        <View>
          <FlatList
            data={menuData}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: 10 }}
            renderItem={({ item }) => (
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
                }}
                onPress={() => nav.navigate('Detail', {data: item})}>
                <ImageBackground
                  source={{ uri:item.image }}
                  style={{
                    width: 200,
                    height: 150,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 3,
                  }}
                  resizeMode={'cover'}>
                </ImageBackground>
                <Text
                  style={{
                    color: '#212121',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {item.title}
                </Text>
                <Text style={{ color: '#979797' }}>{item.desc}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreens;
