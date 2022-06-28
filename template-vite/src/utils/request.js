import { net } from "@electron/remote";

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
        const netReq = net.request(reqOption);
        if (reqOption.method.toLowerCase() == "post" && reqOption.data) {
            netReq.write(JSON.stringify(option.data));
        }
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
