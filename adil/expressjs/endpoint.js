var express = require("express");
const router  = express.Router();

//get

route.get('/',function(req,res,next){
    res.render('index',{title: "express";}   )
});

router.get("/get_stuff",(req,res)=> {
console.log("endponit");
res.json ({
    "message: respones here"
})
});

module.exports = router

