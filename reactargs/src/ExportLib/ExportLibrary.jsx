var uid="Kheman";
var pwd="Kheman123"

var login=(userId,Pass)=>{
    if(userId==uid && Pass==pwd)
    {
        return("Logged In");
    }
    else
    {
        return("Invalid User Id and Pass");
    }
}

var forgotpass=(userId)=>{
    if(userId==uid)
    {
        return pwd;
    }
}

var obj ={uid,pwd,login,forgotpass};
export default obj;