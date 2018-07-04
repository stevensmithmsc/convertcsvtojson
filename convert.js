const csv = require('csvtojson')
const path = require('path')
const fs = require('fs')

const convert = (csvFilePath='customer-data.csv') => csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    
    const filename = path.basename(csvFilePath, '.csv') + '.json';
    fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(jsonObj, null, 2));
    console.log("File converted to json and saved as " + filename);
})
 
convert(process.argv[2])
