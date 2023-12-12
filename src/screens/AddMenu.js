import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ArrowLeft } from 'iconsax-react-native'
import { useNavigation } from '@react-navigation/native'
import  firestore  from '@react-native-firebase/firestore'

const winWidht = Dimensions.get('screen').width
const winHeight = Dimensions.get('screen').height

export default function AddMenu() {

  const nav = useNavigation()
  const [title, setTitle] = useState()
  const [image, setImage] = useState()
  const [desc, setDesc] = useState()

  async function postData() {
    try {
      // const data = await fetch('https://65730399192318b7db416788.mockapi.io/kList/Menu/', {
      //   method: 'POST',
      //   headers: {
      //     'Content-type': 'application/json',
      //     'Accept': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     title: title,
      //     image: image,
      //     desc: desc,
      //   })

      // })

      const data = await firestore().collection('menu').add({
        title,
        image,
        desc,
      })

      console.log((await data.get()).data())
      nav.navigate('Profile')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerStart}>
          <TouchableOpacity style={styles.back} onPress={() => nav.goBack()}>
            <ArrowLeft variant='Linear' color='grey' size={20} />
          </TouchableOpacity>
          <Text style={styles.detailText}>Back</Text>
        </View>
      </View>
      <View style={styles.cardHeader}>
        <Text style={styles.headerText}>Tambah Menu</Text>
      </View>
      <View style={styles.cardContent}>
        <TextInput style={styles.cardTextInput} value={title} onChangeText={(text) => setTitle(text)} autoFocus placeholder='Nama Makanan' placeholderTextColor='#DDD' />
        <TextInput style={styles.cardTextInput} value={image} onChangeText={(text) => setImage(text)} placeholder='Link Gambar' placeholderTextColor='#DDD' />
        <TextInput style={styles.cardTextInput} value={desc} onChangeText={(text) => setDesc(text)} multiline placeholder='Deskripsi Makanan' placeholderTextColor='#DDD' />
      </View>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.cardButton} onPress={postData}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    height: 64,
    paddingHorizontal: 8,
    backgroundColor: '#FFF',
  },
  headerStart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    padding: 8,
  },
  headerEnd: {
    flex: 1,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  detailText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  cardHeader: {
    justifyContent: 'center',
    marginHorizontal: 16,
    width: winWidht - 32,
    height: 64,
    borderColor: '#DDD',
    borderStyle: 'dashed',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
  headerText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  cardContent: {
    padding: 8,
    width: winWidht - 32,
    borderColor: '#DDD',
    borderWidth: 1,
    borderStyle: 'dashed',
    marginHorizontal: 16,
  },
  cardTextInput: {
    borderRadius: 4,
    borderColor: '#DDD',
    borderWidth: 1,
    color: '#000',
    paddingLeft: 8,
    fontSize: 16,
    marginBottom: 8,
  },
  cardFooter: {
    width: winWidht - 32,
    marginHorizontal: 16,
    padding: 8,
    borderColor: '#DDD',
    borderStyle: 'dashed',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  cardButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    width: winWidht - 48,
    backgroundColor: 'rgb(255, 81, 9)',
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
})