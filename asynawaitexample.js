  
function User1(name){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            console.log("in USER1");
             resolve({name:name});
             reject(new Error("something went wrong"));
        },1000);

    });
};

function User2(name){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            console.log("in USER2");
             resolve({name:name});
             reject(new Error("something went wrong"));
        },1000);

    });
};

//now use async and await to call above function and run code syncronized pattern
async function Users()
{
    let user1= await User1("Javascript");
    console.log(user1);
    let user2=await User2(user1.name);
    console.log(user2);
}
Users();