console.log("first user");

//setTimeout is asynchronous function..it requires a callback fun
setTimeout(()=>{
    console.log("second user");
},2000);

console.log("third user");

setTimeout(()=>{
    console.log("fourth user");
},1000);


//In above cases first and third user gets print
//first and then fourth user even though sequentially 
//it should come after third user..it happens because of 
//the setTimeout function which is set to 1000ms
//and then second user gets executed because it has 2000ms timeout  