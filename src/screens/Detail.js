import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Animated, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import { ArrowLeft, More } from 'iconsax-react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import  firestore  from '@react-native-firebase/firestore'

const winWidht = Dimensions.get('screen').width

export default function Detail() {
    const nav = useNavigation()
    const route = useRoute()


    const item = route.params?.data
    const title = route.params?.data.title
    const image = route.params?.data.image
    const desc = route.params?.data.desc
    
    async function deleteData() {
        try {
            var id = route.params?.id
            // const data = await fetch('https://65730399192318b7db416788.mockapi.io/kList/Menu/' + id, {
            //     method: 'DELETE',
            //     headers: {
            //         'Content-type': 'application/json',
            //         'Accept': 'application/json',
            //     }
            // })
            const data = await firestore().collection('menu').doc(id).delete()
            nav.navigate('HomeScreens')
        } catch (e) {
            console.log(e)
        }
    }

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
                <Animated.Image style={styles.imageStyle(scrollY)} source={{ uri: image }} />
                <View style={styles.cardText}>

                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.descText}>{desc}</Text>
                </View>
            </Animated.ScrollView>
            <TouchableOpacity style={styles.cardButton} onPress={() => nav.navigate('EditMenu', { data: item, id: route.params?.id })}>
                <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardButton} onPress={deleteData}>
                <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
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
        resizeMode: 'cover',
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
    cardButton: {
        alignSelf: 'center',
        marginBottom: 16,
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