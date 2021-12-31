import fetch from 'node-fetch';

function getBody (credentials) {
    const body = new URLSearchParams()
    body.append("grant_type", "password");
    body.append("username", credentials.username);
    body.append("password", credentials.password);
    body.append("client_id", credentials.client_id);
    body.append("client_secret", credentials.client_secret);
    body.append("scope", "ns openid offline_access");
    return body;
};

function getToken(credentials) {
    const URL = "https://devtest.io.neolant.su/connect/token";
    const body = getBody(credentials);

    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body.toString()
    });
};

async function connect() {
    const response = await getToken({
        username: "shestakov",
        password: "NHawk2001871645",
        client_id: "client1",
        client_secret: "L6QBtZCrUyNwZfjLmzFV8bZzLGS00O5C"
    });
    const token = await response.json();
    console.log(token);
}

await connect();