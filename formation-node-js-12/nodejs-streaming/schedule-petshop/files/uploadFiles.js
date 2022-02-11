const fs = require('fs');

fs.readFile('../assets/dachshund.jpeg', (error, buffer) => {
    fs.writeFile('../assets/dachshund2.jpeg', buffer, (error) => {
        console.log('Image created!');
    })
})