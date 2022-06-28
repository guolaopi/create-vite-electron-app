import fs from "fs";
import request from "../utils/request";

export default {
    readFile: () => {
        return new Promise((resolve, reject) => {
            // call nodeJS api
            console.log(fs);
            fs.readFile("package.json", (err, data) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                resolve(data.toString());
            });
        });
    },
    netRequest: (url) => {
        return request(url);
    },
};
