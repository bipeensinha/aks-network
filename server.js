const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit-data", (req, res) => {
    // Process form data and store it in the database
    const { name, email } = req.body;
    console.log("Received data:", name, email);
    // Here you would typically store the data in your database
    res.json({ message: "Data received and stored successfully!" });
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
