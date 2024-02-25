import axios from "axios";
import { ReduxStore } from "../store";

const dispatch=ReduxStore.dispatch

export function fetchDataAction() {
    dispatch({
        type:"START_LOADING"
    })
    return () => {
       try{
         axios.get("https://fakestoreapi.com/products")
            .then(response => {
                dispatch({
                    type:"FETCH_PRODUCTS_SUCCESS",
                    payload:response.data
                })
                dispatch({
                    type:"STOP_LOADING"
                })
            }).catch(response=>console.log(response))
        }
            catch(error) {
               
            }
            finally{

            }
    };
}

export function addToCart(product){
    return{
        type:"ADD_TO_CART",
        payload:product
    }

}

export function removeItem(product){
    return {
        type:"REMOVE_ITEM",
        payload:product
    }

}