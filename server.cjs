// NOTE: Your server must be named `server.cjs`
// All JS files must have a `.cjs` extension

/*  
    Create POST routes for the following:
        - Create a directory of random JSON files with the directory name and list of files to be created being taken from the request body.

    Create DELETE routes for the following:
        - Delete the files mentioned in the request body. Directory name must also be provided in the request body.
    
    General instructions: 

    - All responses must be sent only when everything was successful or not. If there is a partial success or partial failure, you may send a different response for that.

    - Response JSON structure must be consistent.

    - Error handling is extremely important.
*/

const express = require('express');
const serverApp = express();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 8000;


serverApp.use(express.json());

function directoryCreater(directoryName) {

    return new Promise((resolve, rejects) => {

        fs.mkdir(path.join(__dirname, directoryName), { overwrite: false }, (error) => {

            if (error) {

                rejects(error);

            } else {

                resolve(`${directoryName} created`);

            }

        });

    });

}

function fileCreater(fileName, directoryName) {

    return new Promise((rejects, resolve) => {

        fs.writeFile(path.join(__dirname, directoryName, `${fileName}.json`), JSON.stringify({ "hello": "how are you" }), (error) => {

            if (error) {

                rejects(error);

            } else {

                resolve(`${fileName}.json created`);

            }

        });

    });

}

serverApp.post('/', (request, response) => {

    let directoryName = request.body.directory;
    let files = request.body.files;

    if (fs.existsSync(directoryName)) {

        response.send('Directory already exists');

    } else {

        directoryCreater(directoryName).then((data) => {

            console.log(data);

        }).catch((data) => {

            console.error(data);

        });

        let filesCreationMessage = files.map((file, fileIndex, files) => {

            fileCreater(file, directoryName).then((data) => {

                console.log(data);

            }).catch((data) => {

                console.error(data);

            });

            return `${file}.json created`

        });

        response.send(filesCreationMessage);

    }

    // console.log(typeof(directoryName), typeof(files[0]));

});

serverApp.listen(PORT, () => {

    console.log(`listening server on port ${PORT}`);

});