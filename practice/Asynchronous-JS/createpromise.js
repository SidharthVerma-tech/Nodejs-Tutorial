const cart = ["shoes", "pants", "kurta"];
function validateCart(cart){
    return true;
}
const promise = createOrder(cart);
promise.then((orderId)=>{
        return orderId;
}).then((orderId)=>{
    return proceedToPayment(orderId);
    }).then((paymentInfo)=>{
        console.log(paymentInfo);
    })
.catch(function(err){
    console.log(err.message);
})
function createOrder(cart){
    const pr = new Promise((resolve,reject)=>{
        if(!validateCart(cart)){
            const err = new Error('Cart is not valid')
            reject(err);
        }
        else{
            const orderId = "2345";
            resolve(orderId);
        }
    });
    return pr;
}
function proceedToPayment(orderId){
    return new Promise((resolve, reject)=>{
        resolve("Payment Succesful");
    })
}

