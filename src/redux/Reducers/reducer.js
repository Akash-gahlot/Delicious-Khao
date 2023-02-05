
import ADD from "../Actions/Action"
const INIT_STATE =  { 
    
        cart:[]
    
}
const CartReducer = (state=INIT_STATE, action) => { 
    switch (action.type) { 
        case "ADD_CART":

            const index = state.cart.findIndex((item) => item.id === action.payload.id);
            if (index >= 0) {
                state.cart[index].qnty += 1;
            }
            else { 
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    cart: [...state.cart, temp]
                }                
            }          
        case "REMOVE_ITEM":
            const data = state.cart.filter((elem) => elem.id !== action.payload);
            return {
                ...state,
                cart: data
            }
        case "REMOVE_ONE":
            const ind = state.cart.findIndex((elem) => elem.id === action.payload.id);
            if (state.cart[ind].qnty >=1) {
                const item = state.cart[ind].qnty -= 1;
                console.log(item);
                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
            // else if (state.cart[ind].qnty === 1) { 
            //     const data=state.cart.filter((elem)=>elem.id!==action.payload.id)               
            //     return {
            //         ...state,
            //         cart:data
            //     }
            // }
        default:
            return state;
    }
}
export default CartReducer;