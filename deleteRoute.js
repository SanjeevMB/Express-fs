const serverApp = require('./server.cjs');

function deleteRout() {

    serverApp.delete('/', (request, response) => {

        let deleteDirectory = request.body.directory;
        let deleteFiles = request.body.files;

        if (fs.existsSync(deleteDirectory)) {

            let allPromises = deleteFiles.map((file, fileIndex, files) => {

                return fileDeleter(`${file}.json`, deleteDirectory);

            });

            Promise.allSettled(allPromises).then((message) => {

                response.send(message);

            }).catch((message) => {

                console.error(message);

            });

        } else {

            response.send(`${deleteDirectory} directory doesn't exist`);

        }

    });
}

module.exports = deleteRout;