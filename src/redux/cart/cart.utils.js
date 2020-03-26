export const additemToCart = (cartItems, cartItemToadd) =>{


    const exisitingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToadd.id);

    if(exisitingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToadd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem

        )
    }

    return [...cartItems, { ...cartItemToadd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove)=>{

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1 ){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ?

            {
                ...cartItem, quantity: cartItem.quantity -1
            } : cartItem
    );
};