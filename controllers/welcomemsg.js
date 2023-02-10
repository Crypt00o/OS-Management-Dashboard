const welcomeMessage = (req,res)=>{
    res.status(200).writeJSON({"msg":"Welcome To OS Management Dashboard Server"})
}

module.exports = {welcomeMessage}