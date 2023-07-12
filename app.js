const Server = require('./models/server');
require('dotenv').config();//kea mi archivo PORT












const server = new Server();//llamo o importar mi clase para utilizarla
server.listen();//lanzo mi metodo listen


