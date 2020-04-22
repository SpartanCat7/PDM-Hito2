import React from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';

import Constants from '../../config/constants';
import Images from '../../config/images';
import Colors from '../../config/Colors';

import RegisterButton from '../../components/login/Button';
import EmailTextField from '../../components/login/EmailTextField';
import TextInputForm from '../../components/login/TextInputForm';

const RegisterScreen = ({onChangeTextEmail, onChangeTextPassword}) => {
    return (
        <View style={stylesLoginScreen.container}>
                <LogoLogin style={stylesLoginScreen.logo}></LogoLogin>
                <View style={stylesLoginScreen.form}>
                    <EmailTextField
                        onChangeText={this._onChangeTextUsername}
                        source={images.USERNAME}
                        placeholder={constants.STRINGS.USER}
                        secureTextEntry={false}
                        autoCorrect={false} >
                    </EmailTextField>
                    <TextInputForm
                        onChangeText={this._onChangeTextPassword}
                        source={images.PASSWORD}
                        placeholder={constants.STRINGS.PASS}
                        secureTextEntry={true}
                        autoCorrect={false} >
                    </TextInputForm>
                    <LoginButton
                        onPress={this._onPress}
                        titleButton={constants.STRINGS.TITLE_BUTTON}>
                    </LoginButton>
                </View>
            </View>
    )
}

const stylesLoginScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
    },
});

export default RegisterScreen;