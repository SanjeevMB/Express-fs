const serverApp = require('./server.cjs');

function postRoute() {

    serverApp.post('/', (request, response) => {

        let directoryName = request.body.directory;
        let files = request.body.files;

        if (fs.existsSync(path.join(__dirname, directoryName))) {

            let allPromises = files.map((file, fileIndex, files) => {

                return fileCreater(file, directoryName);

            });

            Promise.allSettled(allPromises).then((message) => {

                response.send(message);

            }).catch((message) => {

                console.error(message);

            });

        } else {

            directoryCreater(directoryName).then((data) => {

                console.log(data);

            }).catch((data) => {

                console.error(data);

            });

            let allPromises = files.map((file, fileIndex, files) => {

                return fileCreater(file, directoryName);

            });

            Promise.allSettled(allPromises).then((message) => {

                response.send(message);

            }).catch((message) => {

                console.error(message);

            });

        }

    });

}

module.exports = postRoute;