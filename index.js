const express = require("express")

require('dotenv').config()
const cors = require("cors")
const connection = require("./config/db")
const DataModel = require("./models/Data.model")


const app = express();
const PORT = process.env.PORT || 8000
app.use(express.json())
app.use(cors())


app.get("/", async (req, res) => {
    let {name} = req.query
    let data = new DataModel({
        name
    })

    await data.save()
    res.send("home page")
})

app.get("/about", async (req, res) => {
    
    res.send("about page")
})






app.listen(PORT, async () => {
    try{
        await connection
        console.log("db connnected")
    }
    catch(err){
        console.log("error connecting to db")
        console.log(err)
    }
    console.log(`listening on port ${PORT}`)
})

