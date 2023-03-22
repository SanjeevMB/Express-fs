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

const directoryCreater = require('./directoryCreater');
const fileCreater = require('./fileCreater');
const fileDeleter = require('./fileDeleter');
const postRoute = require('./postRoute');
const deleteRoute = require('./deleteRoute');

const PORT = process.env.PORT || 8000;

serverApp.use(express.json());

serverApp.listen(PORT, () => {

    console.log(`listening server on port ${PORT}`);

});

module.exports = serverApp;