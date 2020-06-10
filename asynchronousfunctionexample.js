//console.log("first user");
console.log(User1("user1"));
console.log(User2("user2"));
User3("user3",(arg)=>
{
    console.log(arg);
    user4(arg.name,(arg)=>{    //getting value of user3() in user4()
        console.log(arg);     
    });
}
);



function User1(name)
{
    setTimeout(()=>{
        console.log("USER1");
        return {name: name};  // will return after 2000ms the function is called(inside timeout())
    },2000);  
};

function User2(name)
{
    setTimeout(()=>{
        console.log("USER2");
    },1000);  
    return {name: name}; //will return the instance function is called(outside timeout())
};

//output
    //first name
    //undefined   {note:does not wait for data for 2000s}
    //{name:'user2'} {note: return value when called so no need to wait for data}
    //third user
    //second user

//to print user name even if return is in timeout() ->use callback
function User3(name,xyz)
{
    setTimeout(()=>{
         console.log("USER3");
         xyz ({name:name});  
    },2000);
};

function user4(name,callback)
{
    setTimeout(()=>{
        console.log("USER4");
        callback({name:name});
    },2500);
}