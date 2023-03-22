function directoryCreater(directoryName) {

    return new Promise((resolve, rejects) => {

        fs.mkdir(path.join(__dirname, directoryName), (error) => {

            if (error) {

                rejects(error);

            } else {

                resolve(`${directoryName} created`);

            }

        });

    });

}

module.exports = directoryCreater;