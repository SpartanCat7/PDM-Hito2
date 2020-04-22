export default class Utils {
    static isValidField = (value) => {
        //value.trim().length > 0 ? response = true : response = false;
        return value.trim().length > 0;
    }

    static isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}