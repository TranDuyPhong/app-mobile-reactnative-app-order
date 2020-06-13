import React from 'react';
import {
    View
} from 'react-native';

import MenuFood from './menuFood';
import OrderFood from './orderFood';

import styles from './style';

class System extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MenuFood />
                <OrderFood />
            </View>
        )
    }
} 

export default System;