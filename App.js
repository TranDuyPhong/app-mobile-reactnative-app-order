import React from "react";
import { Guid } from 'guid-typescript';

import System from "./src/components/system";

import OrderContext, { initialize } from './src/context';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuFoods: [
                {
                    id: Guid.create().value,
                    name: 'Food 1',
                    price: 100000
                },
                {
                    id: Guid.create().value,
                    name: 'Food 2',
                    price: 150000
                },
                {
                    id: Guid.create().value,
                    name: 'Food 3',
                    price: 80000
                },
                {
                    id: Guid.create().value,
                    name: 'Food 4',
                    price: 90000
                },
                {
                    id: Guid.create().value,
                    name: 'Food 1',
                    price: 100000
                },
                {
                    id: Guid.create().value,
                    name: 'Food 2',
                    price: 150000
                },
                {
                    id: Guid.create().value,
                    name: 'Food 3',
                    price: 80000
                },
                {
                    id: Guid.create().value,
                    name: 'Food 4',
                    price: 90000
                },
                {
                    id: Guid.create().value,
                    name: 'Food 1',
                    price: 100000
                },
                {
                    id: Guid.create().value,
                    name: 'Food 2',
                    price: 150000
                },
                {
                    id: Guid.create().value,
                    name: 'Food 3',
                    price: 80000
                },
                {
                    id: Guid.create().value,
                    name: 'Food 4',
                    price: 90000
                }
            ],
            orderFoods: [

            ]
        }
    }

    onAddOrderFood = (item) => () => {
        const cloneItem = { ...item };
        const orderFoods = [ ...this.state.orderFoods ];

        const find = orderFoods.find(p => p.id === cloneItem.id);

        if (find) {
            find.count = find.count + 1;
        } else {
            cloneItem.count = 1;

            orderFoods.push(cloneItem);
        }

        this.setState(previousState => {
            return {
                ...previousState,
                orderFoods
            }
        });
    }   

    onDecreaseOrderFood = item => () => {
        const cloneItem = { ...item };
        let orderFoods = [ ...this.state.orderFoods ];

        const find = orderFoods.find(p => p.id === cloneItem.id);

        if (find) {
            find.count = find.count - 1;
        }

        if (find.count === 0) {
            orderFoods = orderFoods.filter(p => p.id !== cloneItem.id);
        }

        this.setState(previousState => {
            return {
                ...previousState,
                orderFoods
            }
        });
    }

    onResetAll = () => {
        this.setState(previousState => {
            return {
                ...previousState,
                orderFoods: []
            }
        });
    }

    render() {
        return <OrderContext.Provider value={{
            ...this.state,
            onAddOrderFood: this.onAddOrderFood,
            onDecreaseOrderFood: this.onDecreaseOrderFood,
            onResetAll: this.onResetAll
        }}>
            <System />
        </OrderContext.Provider>;
    }
}

export default App;