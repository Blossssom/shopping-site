const request = require('request'); 
require('dotenv').config();

module.exports = {
    getProducts: async (req, res) => {
        let query;
        const display = req.body.count;
        if(req.body.params) {
            query = req.body.params;
        }else {
            query = "향수";
        }

        const url = `https://openapi.naver.com/v1/search/shop.json?query=${query}&display=${display}`;
        const headers = {"X-Naver-Client-Id": process.env.CLIENT_ID, "X-Naver-Client-Secret": process.env.CLIENT_SECRET};
        const options = {
            url: encodeURI(url),
            headers
        };

        request.get(options, (err, response, body) => {
            if(!err && response.statusCode === 200) {
                res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
                res.end(body);
            }else {
                res.status(response.statusCode).end();
                console.log('error = ' + response.statusCode);
            }
        });
    }
};