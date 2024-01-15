require("dotenv").config();
console.log(
  `Je 'm'apelle ${process.env.MY_NAME}, j'habite à ${process.env.MY_CITY}, et j'aime ${process.env.MY_LANGUAGE}`
);
