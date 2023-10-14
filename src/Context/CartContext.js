import axios from "axios";
import { createContext, useEffect, useState } from "react";



export let CartContext = createContext();

function getLoggedUserCart(){
 return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , {
     headers,
  })
  .then((response) => response)
  .catch((error) => error);
}

function removeCartItem(productId){
   return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {headers})
  .then((response) => response)
  .catch((error) => error);
}
function updateProductQuantity(productId , count){
   return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,
    {count} , {headers})
    .then((response) => response)
    .catch((error) => error);
}
function onlinePayment(cartId , url , values){
  return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}` ,
   {
     shippingAddress: values
   } , {headers})
   .then((response) => response)
   .catch((error) => error);
}

let userToken = localStorage.getItem('userToken');
let headers = {
  token: userToken
}
function addToCart(id) {
  return axios.post(
    `https://ecommerce.routemisr.com/api/v1/cart`,
    {
      productId: id
    },
    {
      headers
    }).then((response) => response)
    .catch((error) => error)
}

export default function CartContextProvider(props) {

  const [cartId, setcartId] = useState(null);

  async function getCart() {
    let { data } = await getLoggedUserCart();
    setcartId(data?.data._id);
  }

  useEffect(() => {
  getCart();
},[]);
 

    return <CartContext.Provider value={{ cartId , addToCart , onlinePayment , getLoggedUserCart , removeCartItem , updateProductQuantity}}>
            {props.children}

    </CartContext.Provider>
}