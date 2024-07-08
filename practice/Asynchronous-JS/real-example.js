const DOG_API = "https://dog.co/api/breeds/image/random";
async function handlePromise(){
   try{
   const data = await fetch(DOG_API);
   // first this promise must have to be resolved then olny go to next line
   const val = await data.json() // it is also a promise
   // fetch returns the response object
   // that response object is also a json

   console.log(val);
   }catch(err){
    console.log(err);
   }

}
handlePromise()