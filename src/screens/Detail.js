import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Animated } from 'react-native'
import React, { useRef } from 'react'
import { ArrowLeft, More } from 'iconsax-react-native'
import { useNavigation } from '@react-navigation/native';

export default function Detail() {
    const nav = useNavigation()

    const scrollY = useRef(new Animated.Value(0)).current

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerStart}>
                    <TouchableOpacity style={styles.back} onPress={() => nav.navigate('HomeScreens')}>
                        <ArrowLeft variant='Linear' color='grey' size={20} />
                    </TouchableOpacity>
                    <Text style={styles.detailText}>Detail</Text>
                </View>
                <View style={styles.headerEnd}>
                    <More variant='Linear' color='grey' size={24} rotation={90} />
                </View>
            </View>
            <Animated.ScrollView
                style={[styles.cardContent,]}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}>
                <Animated.Image style={styles.imageStyle(scrollY)} source={require('../images/pekpek.jpg')} />
                <View style={styles.cardText}>

                    <Text style={styles.titleText}>Pempek - Palembang</Text>
                    <Text style={styles.descText}>Pempek adalah makanan yang dibuat dari daging ikan yang digiling lembut yang dicampur tepung kanji atau tepung sagu, serta komposisi beberapa bahan lain seperti telur, bawang putih yang dihaluskan, penyedap rasa, dan garam. Pempek biasanya disajikan dengan kuah yang disebut cuka yang memiliki rasa asam, manis, dan pedas. Pempek merupakan makanan khas Palembang - Sumatera Selatan. Pada tahun 1880-an, penjual biasa memikul satu keranjang penuh pempek sambil berjalan kaki berkeliling menjajakan dagangannya. Di kota nya pempek , palembang. cara makan pempek yang benar adalah dengan mengunakan mangkuk kecil sebagai tempat cukonya lalu di makan pempeknya setelah itu pempek dicocol dan cukonya diseruput untuk menambah rasanya nikmatnya.</Text>
                    <Text style={styles.descText}>Pempek adalah makanan yang dibuat dari daging ikan yang digiling lembut yang dicampur tepung kanji atau tepung sagu, serta komposisi beberapa bahan lain seperti telur, bawang putih yang dihaluskan, penyedap rasa, dan garam. Pempek biasanya disajikan dengan kuah yang disebut cuka yang memiliki rasa asam, manis, dan pedas. Pempek merupakan makanan khas Palembang - Sumatera Selatan. Pada tahun 1880-an, penjual biasa memikul satu keranjang penuh pempek sambil berjalan kaki berkeliling menjajakan dagangannya. Di kota nya pempek , palembang. cara makan pempek yang benar adalah dengan mengunakan mangkuk kecil sebagai tempat cukonya lalu di makan pempeknya setelah itu pempek dicocol dan cukonya diseruput untuk menambah rasanya nikmatnya.</Text>
                    <Text style={styles.descText}>Pempek adalah makanan yang dibuat dari daging ikan yang digiling lembut yang dicampur tepung kanji atau tepung sagu, serta komposisi beberapa bahan lain seperti telur, bawang putih yang dihaluskan, penyedap rasa, dan garam. Pempek biasanya disajikan dengan kuah yang disebut cuka yang memiliki rasa asam, manis, dan pedas. Pempek merupakan makanan khas Palembang - Sumatera Selatan. Pada tahun 1880-an, penjual biasa memikul satu keranjang penuh pempek sambil berjalan kaki berkeliling menjajakan dagangannya. Di kota nya pempek , palembang. cara makan pempek yang benar adalah dengan mengunakan mangkuk kecil sebagai tempat cukonya lalu di makan pempeknya setelah itu pempek dicocol dan cukonya diseruput untuk menambah rasanya nikmatnya.</Text>
                </View>
            </Animated.ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
    imageStyle: scrollY => ({
        resizeMode: 'contain',
        height: 300,
        width: 425,
        borderRadius: 16,
        alignSelf: 'center',
        transform: [{
            translateY: scrollY
        },
        {
            scale: scrollY.interpolate({
                inputRange: [-300, 0],
                outputRange: [2, 1],
            })
        },
        ],
    }),

    cardContent: {
        paddingHorizontal: 16,
        marginTop: 72,
    },

    cardText: {
        backgroundColor: '#FFF',
    },
    titleText: {
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
        // marginLeft: 16,
        marginVertical: 8,
    },
    descText: {
        color: '#A3A3A3',
        fontSize: 16,
        textAlign: 'justify',
        lineHeight: 25,
    },
})