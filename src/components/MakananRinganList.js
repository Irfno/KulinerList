import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { Home, Category, Profile } from 'iconsax-react-native';

const MakananRinganList = ({ dataVideo }) => {
  return (
    <View>
      <FlatList
        data={dataVideo}
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
          >
            <ImageBackground
              source={item.image}
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                marginBottom: 10,
                borderRadius: 3,
              }}
              resizeMode={'stretch'}
            >
              <View style={{ flex: 1 }}>
                {/* Konten dalam gambar latar belakang */}
              </View>
            </ImageBackground>
            <Text
              style={{
                color: '#212121',
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              {item.namaMakanan}
            </Text>
            <Text>{item.author}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MakananRinganList;
