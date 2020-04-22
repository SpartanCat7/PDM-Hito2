import {Dimensions} from 'react-native';

const config = {
    SCREEN_HEIGHT: Dimensions.get('window').height,
    SCREEN_WIDTH: Dimensions.get('window').width,
    HEADER_HEIGHT: Dimensions.get('window').height - 45
}

const strings = {
    NAME_APP: "UNSC",
    PASS: "Password",
    EMAIL: "E-mail",
    USER: "Username",
    TITLE_BUTTON:"Login",
    REGISTER_SCREEN: "Register Screen"
}

export default {
    CONFIG: config,
    STRINGS: strings
}