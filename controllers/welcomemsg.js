const welcomeMessage = (req,res)=>{
    res.status(200).writeHTML(`
    <h1>
        Welcome To OS Management DashBoard    
    </h1>
    `)

}

module.exports = {welcomeMessage}