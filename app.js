const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const model = require('./models/users')
const chatmodel = require('./models/chat')
require('./config')

const port = 8082

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))



app.post('/loginuser', (req, res) => {
    // console.log("welcome to data", res)
    // let match =    model.loginUser(request.body);
      console.log(req.body)
    model.loginUser(req.body).then(item => {
        console.log(item, "item")
        if (item && item.length > 0) {
            res.status("200").send(item[0]);
        }
        else {
            res.status("400").send({ message: "invalid mail or password" });
        }
    })
        .catch(err => {
            res.status.send("unable to save data");
        });
});


app.post('/registeruser', (req, res) => {
    // console.log("welcome to data", res)
    // let match =    model.loginUser(request.body);
    console.log(req.body)
    model.registerUser(req.body).then(item => {
        console.log(item, "item")
        if (item) {
            res.status("200").send(item);
        }
        else {
            res.status("400").send({ message: "Can't register" });
        }
    })
        .catch(err => {
            res.status.send("unable to register");
        });
});

app.get('/userlist', (req, res) => {
    // console.log(req.body)
    model.userList().then(items => {
        console.log(items, "item")
        if (items && items.length > 0) {
            res.status("200").send(items);
        }
        else {
            res.status("400").send({ message: "No records found" });
        }
    })
        .catch(err => {
            res.status(400).send(err);
        });
});


app.post('/chatinsert', (req, res) => {
    // console.log(req.body)
    chatmodel.chatInsert(req.body).then(items => {
        console.log(items, "item")
        if (items && items.length > 0) {
            res.status("200").send(items);
        }
        else {
            res.status("400").send({ message: "No records found" });
        }
    })
        .catch(err => {
            res.status(400).send(err);
        });
});


app.listen(port, () => console.log(`Example app listening at http://localhost:8082`))