
const client = require('@feathersjs/client');
const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');
const auth = require('@feathersjs/authentication-client');
// Set up a socket connection to our remote API
const socket = io('http://127.0.0.1:3030');
const api = client().configure(socketio(socket));
api.configure(auth({
  header: 'Authorization', // the default authorization header for REST
  prefix: '', // if set will add a prefix to the header value. for example if prefix was 'JWT' then the header would be 'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOi...'
  path: '/authentication', // the server-side authentication service path
  jwtStrategy: 'jwt', // the name of the JWT authentication strategy
  entity: 'user', // the entity you are authenticating (ie. a users)
  service: 'users', // the service to look up the entity
  cookie: 'feathers-jwt', // the name of the cookie to parse the JWT from when cookies are enabled server side
  storageKey: 'feathers-jwt', // the key to store the accessToken in localstorage or AsyncStorage on React Native
  storage: localStorage // Passing a WebStorage-compatible object to enable automatic storage on the client.
}))


module.exports = api;
