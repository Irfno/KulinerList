import React, {useState, useEffect} from 'react';
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
import { Category, Home, Profile} from 'iconsax-react-native';
const App = () => {
  const [kategori, setKategori] = useState([
    {
      nama: 'Ayam',
    },
    {
      nama: 'Sayur',
    },
    {
      nama: 'Minuman',
    },
    {
      nama: 'Salad',
    },
    {
      nama: 'Gorengan',
    },
    {
      nama: 'Rebus',
    },
    {
      nama: 'Telur',
    },
  ]);

  const [kategoriSeleksi, setKategoriSeleksi] = useState({
    nama: 'Ayam',
  });

  const [dataTrending, setDataTrending] = useState([
    {
      namaResep: 'Ayam Goreng Mantap',
      author: 'Anggi',
      image: require('./src/images/1.jpg'),
    },
    {
      namaResep: 'Ayam Goreng Rica Rica',
      author: 'Nanda',
      image: require('./src/images/2.jpg'),
    },
    {
      namaResep: 'Ayam Goreng Telur',
      author: 'Irfan',
      image: require('./src/images/3.jpg'),
    },
    {
      namaResep: 'Mie Goreng Ayam',
      author: 'Made',
      image: require('./src/images/4.jpg'),
    },
  ]);

  const [dataVideo, setDataVideo] = useState([
    {
      namaResep: 'Ayam Goreng Mantap',
      author: 'Anggi',
      image: require('./src/images/3.jpg'),
      length: '10:10',
    },
    {
      namaResep: 'Ayam Goreng Rica Rica',
      author: 'Nanda',
      image: require('./src/images/4.jpg'),
      length: '09:09',
    },
    {
      namaResep: 'Ayam Goreng Telur',
      author: 'Fernandes',
      image: require('./src/images/1.jpg'),
      length: '12:13',
    },
    {
      namaResep: 'Mie Goreng Ayam',
      author: 'Made',
      image: require('./src/images/2.jpg'),
      length: '12:14',
    },
  ]);

  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <ScrollView>
        <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
        <View style={{marginHorizontal: 20, marginBottom: 20, marginTop: 20}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: '#212121'}}>
            Kuliner<Text style={{color: 'rgb(255, 81, 9)'}}>List</Text>
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
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#212121'}}>
              Trending
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
            <Text style={{fontSize: 14}}>Lihat Semua</Text>
            {/* <Icon name="chevron-forward" size={20} color="#bdbdbd" /> */}
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={dataTrending}
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
                  {item.namaResep}
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
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#212121'}}>
              Video Masak
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
            <Text style={{fontSize: 14}}>Lihat Semua</Text>
            {/* <Icon name="chevron-forward" size={20} color="#bdbdbd" /> */}
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={dataVideo}
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
                  <View style={{flex: 1}}>
                    <View style={{flex: 1}}></View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'rgba(0,0,0,0.7)',
                          paddingTop: 2,
                          paddingBottom: 2,
                        }}>
                        <Home
                          style={{marginLeft: 5}}
                          name="play-circle"
                          size={15}
                          color="#rgb(255, 81, 9)"
                        />
                        <Category
                          style={{marginLeft: 5}}
                          name="play-circle"
                          size={15}
                          color="rgb(255, 81, 9)"
                        />
                        <Profile
                          style={{marginLeft: 5}}
                          name="play-circle"
                          size={15}
                          color="rgb(255, 81, 9)"
                        />
                      </View>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'rgba(0,0,0,0.7)',
                          paddingRight: 10,
                          paddingTop: 2,
                          paddingBottom: 2,
                          paddingLeft: 4,
                        }}>
                        <Text style={{color: '#FFFFFF'}}>{item.length}</Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
                <Text
                  style={{
                    color: '#212121',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {item.namaResep}
                </Text>
                <Text>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 5,
          backgroundColor: '#FFFFFF',
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Home color='rgb(255, 81, 9)' variant="Linear" size={24} />
          <Text style={{color: 'rgb(255, 81, 9)'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Category color='rgb(255, 81, 9)' variant="Linear" size={24} />
          <Text style={{color: 'rgb(255, 81, 9)'}}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Profile color='rgb(255, 81, 9)' variant="Linear" size={24} />
          <Text style={{color: 'rgb(255, 81, 9)'}}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
