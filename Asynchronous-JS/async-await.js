// WHat is async 
// async wrap our function into promise
// Promise is a function which take two parameters resolve and reject
async function getData(){
    return "Namaste";
}
console.log(getData())
getData().then(res=>console.log(res));
const p = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("Resolved value"),5000)
})
async function newPromise(){
    console.log("Hello world !")
    const val = await p;
     // await wait for the promise to be resolved
    console.log(val);
    console.log("Namaste Javascript")
    //  Function is suspended for 5 seconds
}
newPromise()
// Will p wrapped in another promise ? no if promise is returned from async function it remain promise
// if object is returned then it will be get wrapped inside promise
// aync-await used to handle promises
// await can only be used inside an async function




