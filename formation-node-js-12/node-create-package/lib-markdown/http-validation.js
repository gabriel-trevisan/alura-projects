const fetch = require('node-fetch')

function handleError(error){
    throw new Error(error.message);
}

async function checkStatus(arrayUrls){
    try{
        const arrayStatus = await Promise.all(arrayUrls.map(async url => {
            const response = await fetch(url);
            return response.status;
        }));
        return arrayStatus;
    } catch (error){
        handleError(error);
    }
}

function createURLsArray(arrayLinks){
    return arrayLinks.map(objectLink => Object.values(objectLink).join());
}

async function validateURLs(arrayLinks){
    const links = createURLsArray(arrayLinks);
    const statusLinks = await checkStatus(links);

    const result = arrayLinks.map((object, index) => ({ 
        ...object, 
        status: statusLinks[index] 
    }));

    return result;
}

module.exports = validateURLs;