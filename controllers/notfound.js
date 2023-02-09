const notFound=(req,res)=>{
    res.status(404).writeHTML(`
        <h1>
            404 - Not Found :(
                </h1>
    `)

}

module.exports = {notFound}