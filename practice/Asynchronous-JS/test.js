const cart = ["shoes", "pants", "kurta"]
createOrder(cart).then((orderId)=>{
    return proceedToPayment(orderId)
}).then((orderSummary)=>{
        return showOrderSummary(orderSummary)
}).then((wallet)=>{
        return updatedWallet(wallet)
}).then((wallet)=>{
    console.log(wallet);
})
function createOrder(cart){
    return new Promise((resolve, reject)=>{
        resolve("Cart Valid now procees to payment");
    })
}
function proceedToPayment(orderId){
    const orderSummary = ["pant"];
    return new Promise((resolve, reject)=>{
        resolve(orderSummary)
    })
}
function showOrderSummary(orderSummary){
    const wallet = '5$';
    return new Promise((resolve, reject)=>{
        resolve(wallet);
    })
}
function updatedWallet(wallet) {
    return new Promise((resolve, reject) => {
        resolve('6$');
    });
}
