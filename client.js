import fetch from 'node-fetch';

async function start() {
    const connect = async function (credentials) {
        const URL = "https://devtest.io.neolant.su/connect/token";
        const getBody = function () {
            const body = new URLSearchParams()
            body.append("grant_type", "password");
            body.append("username", credentials.username);
            body.append("password", credentials.password);
            body.append("client_id", credentials.client_id);
            body.append("client_secret", credentials.client_secret);
            body.append("scope", "ns openid offline_access");
            return body;
        };
        const body = getBody();
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body.toString()
        });
        return response.json();
    };

    const token = await connect({
        username: "shestakov",
        password: "NHawk2001871645",
        client_id: "client1",
        client_secret: "L6QBtZCrUyNwZfjLmzFV8bZzLGS00O5C"
    });

    console.log(token);
}


await start();