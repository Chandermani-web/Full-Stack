import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// Asking user for the website URL
inquirer
  .prompt([
    {
      message: "Enter your website URL:",
      name: "URL",
    },
  ])
  .then((answer) => {
    const URL = answer.URL;

    // Sanitize file name
    const sanitizedFileName = URL.replace(/[^a-z0-9]/gi, '_').toLowerCase();

    // Create QR code and save as PNG
    const qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream(`${sanitizedFileName}.png`));

    // Save URL to a text file
    const filePath = "./URL.txt";

    fs.appendFile(filePath, URL + "\n", (err) => {
      if (err) {
        console.error("Error saving the URL:", err);
      } else {
        console.log("✅ QR Code generated and URL saved successfully!");
      }
    });
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
