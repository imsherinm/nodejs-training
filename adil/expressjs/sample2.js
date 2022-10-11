const express = require('express')
const app = express()

app.get("/messages", (req, res) => {
	res.send("Hello");
});



app.get("/:universalURL", (req, res) => {
	res.send("404 URL NOT FOUND");
});

app.listen(5000, () => {
	console.log("listening on http://localhost:5000");
})
