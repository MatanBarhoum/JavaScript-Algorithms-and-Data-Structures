/* Promise is a constructor and it's just like real-life. When you make a promise you eiter fulfill it or not. */
const makeServerRequest = new Promise((resolve, reject) => {

});

/* */

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
makeServerRequest.then(result => { //then to check resolve
  console.log(result);
});
  makeServerRequest.catch(error =>{
    console.log(error)
  });
});

makeServerRequest.then(result => { //then to check resolve
  console.log(result);
});
  makeServerRequest.catch(error =>{ //catch to check reject.
    console.log(error)
  });