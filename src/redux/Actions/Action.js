
export const  ADD =(item)=>{ 
    return {
        type: "ADD_CART",
        payload: item
    }
}
//delete complete item
export const  REMOVE=(id)=>{ 
    return {
        type: "REMOVE_ITEM",
        payload:id
    }
}

// remove individual item
export const INDREMOVE = (item) => { 
    return {
        type: "REMOVE_ONE",
        payload:item
    }
}
