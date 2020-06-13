import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';

import Item from './item';
import style from './style';
import OrderContext from '../../../context';

class OrderFood extends React.Component {
    render() {
        const data = { states: this.state, props: this.props };

        return (
            <OrderContext.Consumer>
                {(value) => {
                    return (
                            <View style={style.container}>
                            <Text style={style.title}>Order Food</Text>
                            <FlatList
                                data={value.orderFoods}
                                numColumns={2}
                                keyExtractor={item => item.id}
                                contentContainerStyle={{
                                    paddingHorizontal: 15
                                }}
                                columnWrapperStyle={{
                                    justifyContent: 'space-between'
                                }}
                                renderItem={({ item }) => <Item onDecreaseOrderFood={value.onDecreaseOrderFood} item={item} />}
                            />
                            <TouchableOpacity style={style.resetAll} onPress={value.onResetAll}>
                                <Text style={style.textResetAll}>Reset All</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            </OrderContext.Consumer>
        )
    }
} 

export default OrderFood;