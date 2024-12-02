const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit-form", (req, res) => {
  const formData = req.body; 

  const dataToWrite = JSON.stringify(formData, null, 2); 
  fs.writeFileSync("file.txt",dataToWrite, (err) => {

    if (err) {

        console.error(err);

        res.status(500).send('Error saving data');

    } else {

        res.send('Form data saved successfully!');

    }

});

res.send(`Full name is:${req.body.name} .`);
});


const port = 5500;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
