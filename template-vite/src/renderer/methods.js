import fs from "fs";
import request from "../utils/request";

export default {
    readFile: () => {
        return new Promise((resolve, reject) => {
            // call nodeJS api
            let path = "";
            if (process.env.NODE_ENV == "development") {
                path = "./src/test-files/test.txt";
            } else {
                path = "./test-files/test.txt";
            }
            fs.readFile(path, (err, data) => {
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
