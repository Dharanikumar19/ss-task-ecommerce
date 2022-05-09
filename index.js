require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose");

app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    res.json({message : "Server is running"})
})

const URI = process.env.MONGODB_CONN
mongoose.connect(URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}, err => {
    if(err) throw err;
    console.log("database connected successfully")
})

app.use("/", require("./routes/postalCodeProductRouter"))
app.use("/", require("./routes/cartRouter"))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {console.log(`Server running on ${PORT}`)})
