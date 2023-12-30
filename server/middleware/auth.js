import Jwt  from "jsonwebtoken";

const auth=(req,res,next)=>{
    console.log(req,"reqest is here");
    try {
        const token=req.headers.authorization.split(" ")[1]
        let decodeData= Jwt.verify(token,"test")
         req.userId=decodeData?.id
         next()
    } catch (error) {
        console.log(error);
}
}
export default auth;