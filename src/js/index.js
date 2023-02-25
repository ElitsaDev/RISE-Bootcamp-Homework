import http from 'http';
import home from '../views/home.js';
import create from '../views/create.js';
import errorPage from '../views/404.js';
import siteCss from '../public/css/style.css.js';

const server = http.createServer( (req, res) => {
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
    }else if (req.url == '/orders/add') {
        res.write(`${create}`);
    } else {
        res.write(`${errorPage}`);
    }
    res.end();
});

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




