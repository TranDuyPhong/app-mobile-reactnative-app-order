import React from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';

import Item from './item';
import style from './style';
import OrderContext from '../../../context';

class MenuFood extends React.Component {
    render() {
        const data = { states: this.state, props: this.props };

        return (
            <OrderContext.Consumer>
                {(value) => {
                    console.log(value);
                    return (
                            <View style={style.container}>
                            <Text style={style.title}>Menu Food</Text>
                            <FlatList
                                data={value.menuFoods}
                                numColumns={2}
                                keyExtractor={item => item.id}
                                contentContainerStyle={{
                                    paddingHorizontal: 15
                                }}
                                columnWrapperStyle={{
                                    justifyContent: 'space-between'
                                }}
                                renderItem={({ item }) => <Item onAddOrderFood={value.onAddOrderFood} item={item} />}
                            />
                        </View>
                    )
                }}
            </OrderContext.Consumer>
        )
    }
} 

export default MenuFood;