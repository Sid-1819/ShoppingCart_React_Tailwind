import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number;
    quantity: number;
}


type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    addItem: (id: number) => void;
    removeItem: (id: number) => void;
    removeFromCart: (id: number) => void;
}



const ShoppingCartContext = createContext({});

export function useShoppingCart(){
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
    const [cartItems, setCartItems] = useState<CartItem[]>([]);


function getItemQuantity(id: number){

    return cartItems.find((item) => item.id === id)?.quantity || 0;
}


function addItem(id: number){
    const newCartItems = [...cartItems];
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    if(itemIndex === -1){
       return newCartItems.push({id, quantity: 1});
    } else {
       return newCartItems[itemIndex].quantity++;
    }


    setCartItems(newCartItems);

}

function removeItem(id: number){

    const newCartItems = [...cartItems];
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    if(itemIndex === -1){
        return;
    } 
    else if (newCartItems[itemIndex].quantity === 0){
        return   newCartItems.splice(itemIndex, 1);
       }
    else {
       return newCartItems[itemIndex].quantity--;
    }

  

    setCartItems(newCartItems);
}


function removeFromCart(id: number){

    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
}

    return(
        <ShoppingCartContext.Provider value={{getItemQuantity,addItem,removeItem,removeFromCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}