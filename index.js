const express = require("express")
const cors = require("cors")
const connection = require("./config/db")


const userController = require("./routes/user.routes")
const notesController = require("./routes/notes.routes")
const authentication = require("./middlewares/authentication")
require('dotenv').config()

const app = express();
let PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("home page")
})

app.use("/user", userController)


app.use(authentication)
app.use("/notes", notesController)


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

