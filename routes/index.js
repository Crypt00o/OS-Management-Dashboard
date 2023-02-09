const {Router} = require("../utils/core/Router")
const { welcomeMessage } = require("../controllers/welcomemsg.js")
const {notFound} = require("../controllers/notfound")
const {getSysInfo} = require("../controllers/os/sysinfo")


const router = new Router()


router.get("/",welcomeMessage)
router.all("/*",notFound )

router.get("/os/info",getSysInfo)

module.exports={router}