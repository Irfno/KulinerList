// KategoriList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const KategoriList = ({ kategori, kategoriSeleksi, setKategoriSeleksi }) => {
  return (
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
            onPress={() => setKategoriSeleksi(item)}
          >
            <Text
              style={{
                color:
                  kategoriSeleksi.nama == item.nama ? '#fff' : '#212121',
              }}
            >
              {item.nama}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default KategoriList;
