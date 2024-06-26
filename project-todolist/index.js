const express = require('express');
const port = 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let studentData = [
    { userId: 1, name: "Yuvraj", email: "yr@gmail.com", phone: 123456789, password: "123@kk" },
    { userId: 2, name: "Nishal", email: "nk@gmail.com", phone: 123456789, password: "123@kk" },
    { userId: 3, name: "Jevin", email: "jb@gmail.com", phone: 123456789, password: "123@kk" },
    { userId: 4, name: "Sagar", email: "ss@gmail.com", phone: 123456789, password: "123@kk" },
    { userId: 5, name: "Jaysukh", email: "jm@gmail.com", phone: 123456789, password: "123@kk" }
];

app.get('/', (req, res) => {
    res.render('form', {
        student: studentData,
        editUser: null
    });
});

app.get('/deleteData', (req, res) => {
    const userId = req.query.userId;
    studentData = studentData.filter(el => el.userId != userId);
    res.redirect('/');
});

app.get('/editData', (req, res) => {
    const userId = req.query.userId;
    const user = studentData.find(el => el.userId == userId);
    res.render('form', {
        student: studentData,
        editUser: user
    });
});

app.post('/insertData', (req, res) => {
    const { userId, name, email, phone, password } = req.body;
    const newUser = { userId, name, email, phone, password };
    studentData.push(newUser);
    res.redirect('/');
});

app.post('/updateData', (req, res) => {
    const { userId, name, email, phone, password } = req.body;
    studentData = studentData.map(user => user.userId == userId ? { userId, name, email, phone, password } : user);
    res.redirect('/');
});

app.listen(port, (err) => {
    if (err) {
        console.log("Server not started");
    } else {
        console.log("Server started at " + port);
    }
});
