const dotenv= require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bookingRoutes = require('./routes/handleRoutes')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const port = 3000 || process.env.PORT

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ygvzj.mongodb.net/${process.env.MONGODB_COLLECTION}?retryWrites=true&w=majority`)
.then(() => {
    console.log("Database connected");})

app.use(bookingRoutes)

app.all("*", (req, res, next) => {
	res.status(404).json({
		title: "404 Not found",
		content: `Can't find ${req.originalUrl} on this server`,
	});
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})