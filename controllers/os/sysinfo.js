const os = require('os')


const getSysInfo=(req,res)=>{
    try{
        res.status(200).writeJSON({
            "result":{
                arch:os.arch(),
                uptime:os.uptime(),
                "cpu-cores":os.cpus().length,
                cpu:os.cpus()[0],
                totalMemory:parseInt(os.totalmem()/1000000000),
                os:os.platform(),
                
                "os-version":{
                    release:os.release() ,
                    version:os.version(),
                    kerenl:os.type()

                },
                "hostname":os.hostname(),
                "Network Interfaces":os.networkInterfaces(),
                "current-user-info":os.userInfo()
            }
        })

    }catch(err){
        res.status(500).writeJSON({"Error":"Sorry Intenal Error Had Occured :( "})

    }
}

module.exports={getSysInfo}