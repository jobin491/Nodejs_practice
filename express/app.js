const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./models/user');
const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
    User.findById('65ee948911b751679c576278') 
    .then(user=>{ 
        req.user = user;
        next();
    })
    .catch(err=> console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// mongoConnect(()=>{
//     app.listen(5000);
// });

//const errorController = require('./controllers/error');
app.use((req, res, next) => {
    res.render('404',{ pageTitle: 'Page Not Found',path: '/404' });
})

mongoose
    .connect(
        'mongodb+srv://Jobin:pict123@cluster0.ejl4xdq.mongodb.net/shop?retryWrites=true'
        )
    .then((result)=>{
        User.findOne()
        .then(user=>{
            if(!user) {
                const user = new User({
                    name: 'Sam',
                    email: 'test.test',
                    cart: {
                        items: []
                    }
                });
                user.save();
            }
        });
        app.listen(5000);
    })
    .catch(err=>{
        console.log(err);
    });