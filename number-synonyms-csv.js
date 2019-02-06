const writtenNumber = require('written-number');
const fs = require('fs');

let langDict = {
    en: "en",
    pt: "pt",
    es:  "es",
    fr: "fr",
    vi: "vi",
    ar:  "ar",
    tr:  "tr",
    uk: "uk",
    id: "id"
}

for(let lang in langDict){
    let dataToWrite = "";
    for(let i  = 0; i < 100; i++){
        const newLine = i + "," + writtenNumber(i, {lang: lang}) + "\n"
        dataToWrite +=  newLine
    }
    
    [100, 1000, 1000000, 1000000000].forEach(number => {
        const newLine = number + "," + writtenNumber(number).replace("one", "").trim() + "\n"
        dataToWrite +=  newLine
    })
    
    console.log(dataToWrite)
    
    fs.writeFile(`${lang}-number-synonyms.csv`, dataToWrite, 'utf8', function (err) {
      if (err) {
        console.log('Some error occured - file either not saved or corrupted file saved.');
      } else{
        console.log('It\'s saved!');
      }
    });
}



