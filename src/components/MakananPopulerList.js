import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

const MakananPopulerList = ({ dataTrending }) => {
  return (
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

export default MakananPopulerList;
