import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import style from './style';

class Item extends React.Component {
    render() {
        const data = { states: this.state, props: this.props };

        return (
            <TouchableOpacity style={style.container} onPress={data.props.onDecreaseOrderFood(data.props.item)}>
                <View style={style.info}>
                    <Text style={style.name}>{data.props.item.name}</Text>
                    <Text style={style.price}>{data.props.item.price}</Text>
                    <Text style={style.price}>{data.props.item.count}</Text>
                </View>
                <Icon name="remove" size={24} color="red" />
            </TouchableOpacity>
        )
    }
}

export default Item;