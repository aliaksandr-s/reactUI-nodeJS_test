import "reflect-metadata";
import {createExpressServer} from "routing-controllers";
import CustomerController from "./controllers/Customer"
const ws = require('ws');

const webSocketServer = new ws.Server({port: 3002});
export const webSocketClients = {}

webSocketServer.on('connection', ws => {

  let id = Math.random();
  webSocketClients[id] = ws;
  console.log('new connection' + id);

  ws.on('message', message => {
    console.log('message recieved' + message);

    for(var key in webSocketClients) {
      webSocketClients[key].send("message revieved");
    }
  });

  ws.on('close', function() {
    console.log('connection closed' + id);
    delete webSocketClients[id];
  });

});

const app = createExpressServer({
  controllers: [
    CustomerController
  ]
});

app.listen(3001, () => console.log('Server is listening at ports: 3001, 3002'));

export default app;