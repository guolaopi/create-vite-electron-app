import fs from "fs";

export default {
    readFile: () => {
        return new Promise((resolve, reject) => {
            // call nodeJS api
            console.log(fs);
            fs.readFile("package.json", (err, data) => {
                if (err) {
                    console(err);
                    reject(err);
                }
                resolve(data.toString());
            });
        });
    },
};
