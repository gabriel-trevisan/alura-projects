const fs = require('fs');
const path = require('path');

module.exports = (filePath, fileName, callbackImage) => {
    const typeValids = ['png', 'jpeg', 'jpg'];
    const typeFile = path.extname(filePath);
    const isValidType = typeValids.indexOf(typeFile.substring(1)) !== -1;
    const newPath = `./assets/images/${fileName}${typeFile}`;
    const error = "Image type is invalid!"

    if(isValidType){
        fs.createReadStream(filePath)
            .pipe(fs.createWriteStream(newPath))
            .on('finish', () => {
                callbackImage(false, newPath);
            })
    } else {
        callbackImage(error);
    }
}