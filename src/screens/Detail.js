import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { ArrowLeft, More } from 'iconsax-react-native'

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerStart}>
                    <TouchableOpacity style={styles.back}>
                        <ArrowLeft variant='Linear' color='grey' size={20} />
                    </TouchableOpacity>
                    <Text style={styles.detailText}>Detail</Text>
                </View>
                <View style={styles.headerEnd}>
                    <More variant='Linear' color='grey' size={24} rotation={90} />
                </View>
            </View>
            <Image style={styles.imageStyle} source={require('../images/pekpek.jpg')} />
            <View style={styles.cardContent}>
                <Text style={styles.titleText}>Pempek - Palembang</Text>
                <Text style={styles.descText}>Pempek adalah makanan yang dibuat dari daging ikan yang digiling lembut yang dicampur tepung kanji atau tepung sagu, serta komposisi beberapa bahan lain seperti telur, bawang putih yang dihaluskan, penyedap rasa, dan garam. Pempek biasanya disajikan dengan kuah yang disebut cuka yang memiliki rasa asam, manis, dan pedas. Pempek merupakan makanan khas Palembang - Sumatera Selatan. Pada tahun 1880-an, penjual biasa memikul satu keranjang penuh pempek sambil berjalan kaki berkeliling menjajakan dagangannya. Di kota nya pempek , palembang. cara makan pempek yang benar adalah dengan mengunakan mangkuk kecil sebagai tempat cukonya lalu di makan pempeknya setelah itu pempek dicocol dan cukonya diseruput untuk menambah rasanya nikmatnya.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        height: 64,
        paddingHorizontal: 8,
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
    imageStyle: {
        resizeMode: 'contain',
        height: 300,
        width: 425,
        borderRadius: 16,
        alignSelf: 'center',
    },

    cardContent: {
        padding: 16,
    },
    titleText: {
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
    },
    descText: {
        marginTop: 4,
        color: '#A3A3A3',
        fontSize: 16,
        textAlign: 'justify',
        lineHeight: 25,
    },
})