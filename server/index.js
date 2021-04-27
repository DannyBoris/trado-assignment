const express = require("express");
const fs = require("fs");
const app = express();
const ColorThief = require("color-thief");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const IMAGE_PATH = "IMAGE.png";
const cf = new ColorThief();
const CLEAN_BASE_64_RGX = /^data:image\/(png|jpg|jpeg|jfif);base64,/;

app.post("/api/logo", (req, res) => {
  const { data } = req.body;
  var base64Data = data.replace(CLEAN_BASE_64_RGX, "");
  fs.writeFile(IMAGE_PATH, base64Data, "base64", function (err) {
    if (!err) {
      let image = fs.readFileSync(IMAGE_PATH);
      const palette = cf.getPalette(image, 2);
      res.status(200).json({
        primary: palette[0],
        secondary: palette[1],
      });
    } else {
      res.status(500).json(err);
    }
  });
});

const PORT = 8082;

app.listen(PORT, console.log(`Listeining on port ${PORT}`));
