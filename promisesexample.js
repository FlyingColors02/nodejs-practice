let p=new Promise((resolve,reject) => {
     resolve("hello users!!");
     reject(new Error("something went wrong"));
 });

 p.then(data => console.log(data))
     .catch(error => console.log(error.message));



//how to make function promises type

 function User1(name)
 {
    return new Promise((resolve,reject) =>{
     setTimeout(()=>{
            console.log("i m user!!");
            resolve({name:name});
            reject(new Error("not a user"));
     });
    });
    
 }; 

 function User2(name)
 {
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
            console.log("in user2");
            resolve({name:name});
            reject(new Error("didn't get value"));
        });
     });
 };

// User1("Javascript").then(data=> console.log(data))
//     .catch(error=> console.log(error.message));


 //passing data of user1 to another function user2
 User1("nodejs").then(data=>{
             console.log(data);
         User2(data.name)
         .then(value=>console.log(value)).catch(error=>console.log(error.message));
        }).catch(error=>console.log(error.message));