import fetch from 'node-fetch';

function start() {
    const connect = function (credentials) {
        const URL = "https://devtest.io.neolant.su/connect/token"
        const getBody = function ({
            username,
            password,
            client_id,
            client_secret
        }) {
            return new URLSearchParams();
            body.append("grant_type", "password");
            body.append("scope", "ns openid");
            body.append("username", username);
            body.append("password", password);
            body.append("client_id", client_id);
            body.append("client_secret", client_secret);
        };

        const body = getBody(credentials.username, credentials.password, credentials.client_id, credentials.client_secret);
        console.log(body);

        const request = function (body) {
            return fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: body
            });

            const result = await request(body);
            if (!result.ok) console.log(result.status, result.statusText);
            console.debug(result.text);
        }
    }
}

start();