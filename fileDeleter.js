function fileDeleter(fileName, directoryName) {

    return new Promise((resolve, rejects) => {

        if (fs.existsSync(fileName)) {

            fs.unlink(path.join(__dirname, directoryName, fileName), (error) => {

                if (error) {

                    rejects(error);

                } else {

                    resolve(`${fileName}.json deleted`);

                }

            });

        } else {

            resolve(`${fileName}.json doesn't exist`);

        }

    });

}

module.exports = fileDeleter;