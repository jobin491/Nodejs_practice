const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
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
    User.findById('65ed87d732dc769988b7500d') 
    .then(user=>{ 
        req.user = new User(user.name, user.email, user.cart, user._id);
        //console.log(user);
        // console.log(req);
        next();
    })
    .catch(err=> console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

mongoConnect(()=>{
    app.listen(5000);
});
// app.use(errorController.get404());
