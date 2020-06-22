const fs = require("fs");
let bestanden = require('./benodigde-bestanden.json');

let copyCallback = function (err) {
  if (err) {
    console.error(err.message);
  }
};

bestanden.forEach((bestandsInfo) => {
  console.log(`Kopiëren ${bestandsInfo.bron} to ${bestandsInfo.bestemming}`);
  fs.copyFile(bestandsInfo.bron, bestandsInfo.bestemming, copyCallback);
});