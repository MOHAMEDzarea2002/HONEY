
import {CartContext} from '../context/CartContext'
import { useContext } from 'react';
export const useCart = () => {
    const cart = useContext(CartContext);
    return cart;
}
