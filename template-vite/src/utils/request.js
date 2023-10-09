import { net } from "@electron/remote";
import qs from "qs";

export default function request(option) {
    return new Promise((resolve, reject) => {
        let reqOption = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        if (typeof option == "string") {
            reqOption.url = option;
            reqOption.method = "GET";
        } else {
            Object.assign(reqOption, option);
        }
        if (reqOption.data) {
            netReq.write(JSON.stringify(option.data));
        }
        if (reqOption.param) {
            reqOption.url += `?${qs.stringify(reqOption.param)}`;
        }
        const netReq = net.request(reqOption);
        netReq.on("response", (response) => {
            if (response.statusCode != 200) {
                reject(response);
            } else {
                response.on("data", (data) => {
                    resolve(data.toString());
                });
            }
        });
        netReq.end();
    });
}
