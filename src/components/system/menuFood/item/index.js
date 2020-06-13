import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import style from './style';

class Item extends React.Component {
    render() {
        const data = { states: this.state, props: this.props };

        return (
            <TouchableOpacity style={style.container} onPress={data.props.onAddOrderFood(data.props.item)}>
                <View>
                    <Text style={style.name}>{data.props.item.name}</Text>
                    <Text style={style.price}>{data.props.item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default Item;