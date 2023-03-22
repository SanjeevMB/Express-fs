function fileCreater(fileName, directoryName) {

    return new Promise((rejects, resolve) => {

        if (fs.existsSync(path.join(__dirname, directoryName, fileName))) {

            resolve(`${fileName} already exists`);

        } else {

            fs.writeFile(path.join(__dirname, directoryName, `${fileName}.json`), JSON.stringify({ "name": "Sanjeev" }), (error) => {

                if (!error) {

                    rejects(error);

                } else {

                    resolve(`${fileName}.json created`);

                }

            });

        }

    });

}

module.exports = fileCreater;