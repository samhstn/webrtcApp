# WebRTC App

### A chat app built using WebRTC and the ipcortex api

The app will have:
* A chat service
* A phone service
* A video chat service
* A list of contacts

### Getting started

First clone and cd into the WebRTC app as follows:

```bash
git clone https://github.com/shouston3/webrtcApp.git && cd webrtcApp && npm i
```

You will need to add `cert.pem` and `key.pem` files to allow the hapi server to send https requests.
This can be done as follows:

```bash
openssl genrsa -out key.pem 2048
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

Now start the server and view the app

```bash
npm start
```
