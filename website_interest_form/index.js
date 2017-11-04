require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
app.use(cors());

var db = require('knex')(
	{
		client: 'mysql',
		connection:
			{
				host     : process.env.DATABASE_HOST,
				user     : process.env.DATABASE_USERNAME,
				password : process.env.DATABASE_PASSWORD,
				database : process.env.DATABASE_DB
			}
	}
);

app.post("/", (req, res)=>{
    
    var filteredInput = {
        email: req.body.email,
        name: req.body.name,
        heard_of_us: req.body.heard_of_us,
        want_to_accomplish: req.body.want_to_accomplish
    };

    if(!filteredInput.email ||
        !filteredInput.name) return res.status(412).end();

    db("form_entry")
        .insert(filteredInput)
        .then(()=>{
            res.end();
        })
        .catch(err => res.status(500).send(err));
});

app.listen(process.env.PORT);