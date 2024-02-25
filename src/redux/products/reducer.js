const initialState = {
    products: [],
    cart: [],
    error: false,
    loading: false
};

export function productsReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_PRODUCTS_SUCCESS":
            const newData=action.payload.map(product=>{return {...product,productInCart:false}})
            return { ...state, products: newData};
        case "FETCH_PRODUCTS_FAILURE":
            return { ...state, error: true };
        case "START_LOADING":
            return { ...state, loading: true };
        case "STOP_LOADING":
            return { ...state, loading: false };
        case "ADD_TO_CART":
            const newProductData=state.products.map(product=>{
                if(product.id===action.payload.id){
                    return {...product,productInCart:true}
                }
                else{
                    return {...product}
                }
            })
            return {...state,cart:[...state.cart,action.payload],products:newProductData}
        case "REMOVE_ITEM":
            const newCartData=state.cart.filter(product=>product.id !==action.payload.id)
            const newProductDatas=state.products.map(product=>{
                if(product.id===action.payload.id){
                    return {...product,productInCart:false}
                }else{
                    return product
                }
            })
            return {...state,cart:newCartData,}
        default:
            return state;
    }
}
