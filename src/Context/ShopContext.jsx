import React, {createContext, useState} from "react";
import all_product from '../Components/Assets/Assets/all_product'

export const ShopContext = createContext(null)

// add to cart 
const getDefaultCart = ()=> {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    // total item an calculate total amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    // in cart icon increasing the product numbers
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item]
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

// creat contextValue veriable under shopcontextProvider function

// in veriable contextValue function store any data and value

// use these functions and value in any conponent

// add to kart function -> function -> getDefaultCart = () => {} -> use ustate 

// cart total value -> function -> getTotalCartAmount =()=>{}  - import that function in navbar bcoc carticon is in navbar