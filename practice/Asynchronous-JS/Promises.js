// // Promises are used to handle async operations in javascript
// const cart = ["shoes", "pants", "kurta"]
// createOrder(cart, ()=>{
//     proceedToPayment(orderId);
// });
// // We give control of our program to the function which we are not aware of
// const promise = CreateOrder(card)
// //{data : value}
// promise.then((orderId)=>{
//     proceedToPayment(orderId);
// })
// Whenever there is data in promise our callback function will be called
// it will call only once and just once
const DOG_API = "https://dog.ceo/api/breeds/image/random";
// fetch function returns us promise
const user = fetch(DOG_API)
// user is promise object
user.then((data)=>{
    console.log(data);
})
// 3 states of promise, pending, fulfilled or rejected
// Promise is an object representing eventual completion of asynchronous event
// Promise Chaining
createBrotliDecompress(cart).then(()=>{
    return UpdateWallet().then(()=>{
       return  ShowOrderSummary().then(()=>{

        })
    })
})



