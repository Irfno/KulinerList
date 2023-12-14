import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

export default function Register() {

    const nav = useNavigation()

    const [inputEmail, setInputEmail] = useState('')
    const [inputPass, setInputPass] = useState('')

    async function createAuth() {
        try {
            if (inputEmail != '' && inputPass != '') {
                const data = await auth().createUserWithEmailAndPassword(inputEmail, inputPass)
                console.log(data)
                nav.navigate('Login')
            } else {
                ToastAndroid.show('Email dan Password tidak boleh kosong!', ToastAndroid.SHORT)
            }
        } catch (e) {
            if (e.code == 'auth/invalid-email') {
                ToastAndroid.show('Format email tidak sesuai', ToastAndroid.SHORT)
            } else if (e.code == 'auth/weak-password') {
                ToastAndroid.show('Password harus lebih dari 6 char', ToastAndroid.SHORT)
            }
            // console.log(e.code);
        }
    }
    return (
        <View style={styles.Container}>
            <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
            <KeyboardAvoidingView behavior='height'>
                <View style={styles.Card}>
                    <View style={styles.HeaderCard}>
                        <Text style={styles.HeadingText}>Sign Up</Text>
                        <Image style={styles.WelcomeImg} source={require('../images/welcome.png')} />
                    </View>
                    <View style={styles.ContentCard}>
                        <View style={styles.InputCard}>
                            <TextInput style={styles.StyleInput} value={inputEmail} onChangeText={(text) => setInputEmail(text)} placeholder='Email' placeholderTextColor='#979797' />
                        </View>
                        <View style={styles.InputCard}>
                            <TextInput style={styles.StyleInput} value={inputPass} onChangeText={(text) => setInputPass(text)} placeholder='Password' placeholderTextColor='#979797' />
                        </View>
                        <View style={styles.ButtonCard}>
                            <TouchableOpacity style={styles.ButtonSignIn} onPress={createAuth}>
                                <Text style={styles.SignInText}>Create Account</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ButtonSignUp} onPress={() => nav.navigate('Login')}>
                                <Text style={styles.SignUpText}>Already Have an Account? Login Here</Text>
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
        paddingBottom: 32,
    },
    Card: {
        marginHorizontal: 16,
        borderRadius: 16,
    },
    HeaderCard: {
        alignItems: 'center',
    },
    WelcomeImg: {
        marginTop: -48,
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
        marginTop: 64,
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