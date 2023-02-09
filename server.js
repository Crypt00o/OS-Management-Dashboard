const {Router} = require("./utils/core/Router")

const {createServer}=require("http")
const {bodyParse} = require("./utils/core/middlewares/bodyparser-middleware")
const {router} = require("./routes/index.js")


const app =new Router()



app.use(router)


const server =createServer((req,res)=>{
	  app.startRouting(req, res)
}) 









/*
app.all("/*",(req,res)=>{
	res.status(404).writeHTML("<h1> 404 - Not Found </h1>")
})
*/





const PORT = process.env.PORT || 3000


server.listen(PORT,()=>{
	  console.log(`[+] Server Is Listenting On ${PORT}`)
})

