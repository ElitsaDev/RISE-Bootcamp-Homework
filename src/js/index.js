import http from 'http';
import home from '../views/home.js';
import create from '../views/create.js';
import errorPage from '../views/404.js';
import siteCss from '../public/css/style.css.js';
import timeToDelay from './services/Service.js';
import { parse } from 'querystring';
import fs from 'fs';

const fsPromises = fs.promises;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });

    if (req.url == '/') {
        res.write(`${home}`);
    } else if (req.url == '/css/style.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css',
        });
        res.write(siteCss);
    } else if (req.url == '/orders/add' && req.method==="POST") {
        
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            fsPromises.readFile('././db.json', 'utf8')
                .then(data => {
                    let json = JSON.parse(data);
                   let ADDED = JSON.parse(parse(body)) ;
                    json.orders.push({customerId: data.customerId ,productList: {...data}});
                    fsPromises.writeFile('./db.json', JSON.stringify(json, null, 2 ));
                }) 
                .catch(error => {
                    console.log("Field to update data")
                });   

            console.log();
            res.end('ok');
        });

    } else if(req.url == '/orders/add') {
        res.write(`${create}`);
    }else {
        res.write(`${errorPage}`);
    }
    res.end();
});

timeToDelay;
server.listen(5000);
console.log('HTTP Server is running on port 5000...');




/*
200
400
300
DronType {capacity: 500, consumption: 1}
DronType {capacity: 1000, consumption: 3}
DronType {capacity: 2000, consumption: 5}

*/

//-----------------------------------------
/*
let getDronPosition = new Array();
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] == 'd') {
                    let sizes = { i, j };
                    getDronPosition.add(sizes);
                }
            }
}
*/




