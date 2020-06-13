import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'aqua',
        marginTop: 10,
        width: '48%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },  
    info: {
        flex: 1
    },
    name: {
        fontSize: 18,
        fontFamily: 'Tahoma',
        fontWeight: '700'
    },
    price: {
        fontSize: 14,
        fontFamily: 'Tahoma'
    }
});

export default styles;