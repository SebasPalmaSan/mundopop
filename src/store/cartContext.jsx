import { createContext, useState } from 'react';

const cartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
                }));
        } else {
            setCart([...cart, {...item, quantity}]);
        }
    }

    const removeFromCart = (item) => setCart(cart.filter(product => product.id !== item.id));
    
    const clearCart = () => setCart([]);
    const isInCart = (item) => cart.find(product => product.id === item.id) ? true : false;
    
    return (
        <cartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, isInCart }}>
        {children}
        </cartContext.Provider>
    );
}

export { cartContext, CartProvider }; 