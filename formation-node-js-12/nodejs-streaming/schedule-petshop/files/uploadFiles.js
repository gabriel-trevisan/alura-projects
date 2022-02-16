const fs = require('fs');

fs.createReadStream('../assets/dachshund.jpeg')
    .pipe(fs.createWriteStream('../assets/dachshund-test-stream.jpeg'))
    .on('finish', () => {
        console.log('Image created');
    })