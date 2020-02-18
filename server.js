const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const webpush = require('web-push');
const cors = require('cors');
app.use(bodyparser.json());
app.use(cors());
const vapidKeys = webpush.generateVAPIDKeys();
const publicVapidKeys = 'BM0rMgHfIzpb3kJtkpfkC3yq8sE0oW6aCJdwH3d1neygUqnK7TLUlel06ymEfLfnJY72DnHgnZO2ozCDng8Fu0Y';
const privateVapidKeys = 'z2Y94sdJVzTxM3OTXGlxypzuR1RxIL9-x4WdufJLn3g'

webpush.setVapidDetails('mailto: prajwalpanta87@gmail.com', publicVapidKeys, privateVapidKeys);

app.post('/subscribe', (req, res) => {
    console.log('--____REQUEST--------')
    // res.status(201).json({});
    const { body } = req
    console.log({ body })
    const subscription = req.body;    
    const payload  = JSON.stringify(
        {
        title : 'Push Test from server to be shown',
        body : 'This is body'}
        )
    webpush.sendNotification(subscription, payload)
    .then((send) => {
        console.log('---------SUCCESS---------')
        console.log('send', send)
        res.send(send)
    })
    .catch(err => {
        console.log('-----------__ERROR-------------')
        console.log(err)
        res.status(400).send(err)
    })
});

app.listen(3500, () => {
    console.log('Server created');
});