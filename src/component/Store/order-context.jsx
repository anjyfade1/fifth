import { createContext, useState } from "react";

const OrderContext = createContext({
    orders : [],
    totalOrders: 0,
    addOrder: (productItem) => {},
    removeOrder: (productId) => {},
    itemIsOrder: (productId) => {},
});

export function OrdersContextProvider(props) {

    const [userOrders, setUserOrders] = useState([]);
    

    function addOrderHandler(productItem) {
        setUserOrders((prevUserOrders) => {
            return prevUserOrders.concat(productItem);
        })
    }

    function removeOrderHandler(productId) {
        setUserOrders((prevUserOrders) => {
            return prevUserOrders.filter(product => product.id !== productId);
        })
    }

    function itemIsOrderHandler(productId) {
        return userOrders.some(product => product.id === productId)
    }


    const context = {
        orders: userOrders,
        totalOrders: userOrders.length,
        addOrder: addOrderHandler,
        removeOrder: removeOrderHandler,
        itemIsOrder: itemIsOrderHandler,
    };

    return <OrderContext.Provider value={context}>
        {props.children}
    </OrderContext.Provider>
}

export default OrderContext;
