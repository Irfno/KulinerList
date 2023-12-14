import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StackActions, useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

export default function Login() {

    const nav = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (auth().currentUser) {
            nav.dispatch(StackActions.replace('Bottom'))
        }
    }, [])

    function clearText() {
        setEmail('')
        setPassword('')
    }

    async function login() {
        try {
            if (email != '' && password != '') {
                const data = await auth().signInWithEmailAndPassword(email, password)
                console.log(data);
                nav.dispatch(StackActions.replace('Bottom'))
            } else {
                ToastAndroid.show('Email dan Password tidak boleh kosong!', ToastAndroid.SHORT)
            }
        } catch (e) {
            if (e.code == 'auth/invalid-email') {
                ToastAndroid.show('Format email tidak sesuai', ToastAndroid.SHORT)
            } else if (e.code == 'auth/invalid-credential') {
                ToastAndroid.show('Email atau Password salah', ToastAndroid.SHORT)
            }
            console.log(e.code);
        }
    }
    return (
        <View style={styles.Container}>
            <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
            <KeyboardAvoidingView behavior='height'>
                <View style={styles.Card}>
                    <View style={styles.HeaderCard}>
                        <Text style={styles.HeadingText}>Sign In</Text>
                        <Image style={styles.WelcomeImg} source={require('../images/welcome.png')} />
                    </View>
                    <View style={styles.ContentCard}>
                        <View style={styles.InputCard}>
                            <TextInput style={styles.StyleInput} value={email} clearButtonMode='always' onChangeText={(text) => setEmail(text)} placeholder='Email' placeholderTextColor='#979797' />
                        </View>
                        <View style={styles.InputCard}>
                            <TextInput style={styles.StyleInput} value={password} clearButtonMode='always' onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholder='Password' placeholderTextColor='#979797' />
                        </View>
                        <View style={styles.ButtonCard}>
                            <TouchableOpacity style={styles.ButtonSignIn} onPress={login}>
                                <Text style={styles.SignInText}>Sign In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ButtonSignUp} onPress={() => [clearText(), nav.navigate('Register')]}>
                                <Text style={styles.SignUpText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },
    Card: {
        marginHorizontal: 16,
        borderRadius: 16,
    },
    HeaderCard: {
        alignItems: 'center',
    },
    WelcomeImg: {
        marginTop: -32,
        marginBottom: -32,
        width: 256,
        height: 384,
        resizeMode: 'contain',
    },
    ContentCard: {
        paddingHorizontal: 16,
    },
    InputCard: {
        borderWidth: 1,
        borderColor: '#979797',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
    },
    StyleInput: {
        borderWidth: 0,
        fontSize: 18,
        color: '#000',
    },
    ButtonCard: {
        marginTop: 96,
    },
    ButtonSignIn: {
        alignItems: 'center',
        backgroundColor: '#ff5109',
        paddingVertical: 16,
        borderRadius: 4,
        marginBottom: 8,
    },
    ButtonSignUp: {
        alignItems: 'center',
        paddingVertical: 16,
    },
    HeadingText: {
        color: '#000',
        fontSize: 32,
        fontWeight: 'bold',
    },
    SignInText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '700',
    },
    SignUpText: {
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
    },
})