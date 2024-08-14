import jwt from "jsonwebtoken"

const createTokenAndSaveCookie=(userId,res)=>{
    const token = jwt.sign({ userId },process.env.JWT_TOKEN,{
        expiresIn: "20d"
    }); 
    res.cookie("jwt", token, {
        httpOnly:true,// xss attack protection
        secure:true,
        sameSite:"strict"  // csrf protection
    });
}

export default createTokenAndSaveCookie;