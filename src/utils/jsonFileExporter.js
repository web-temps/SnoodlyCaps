const fs = require('fs')

const prepend = './secure/'

const appendFileSync = function (filename, item) {
    let str = JSON.stringify(item);
    console.log('appending file')
    fs.appendFileSync(prepend + filename + '.json', str + '\n', (err) => {
        if (err) throw err;
        console.log("file saved")
    })

    return `${prepend}${filename}.json`

}

const retreiveFile = function({}){
    return JSON.parse(this);
    

}
const writeToFile = function (filename, item) {

    console.log("writing to file...")
    if (typeof item === Object) {
        console.log("typeof item received === Object... stringifying item")
        item = JSON.stringify(item)
        console.log('file saved')
    }


    fs.writeFile(prepend + filename + '.json', item, (err) => {
        if (err) throw err;
        console.log("file saved")
    })
}

const stringifyThenSave = function (filename, item) {
    let str = JSON.stringify(item);
    fs.writeFile(prepend + filename + '.json', str, (err) => {
        if (err) throw err;
        console.log("file saved")
    })

}


module.exports = {
    
    appendFileSync: appendFileSync,
    retreiveFile: retreiveFile,
    writeFile: writeToFile,
    stringifyThenSave: stringifyThenSave
}