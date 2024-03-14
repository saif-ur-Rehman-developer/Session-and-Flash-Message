var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res,) {
  res.render('index', { title: req.flash('Message') });
});

//You have to set value of flash as key pair form
// Just as  flash("Name","Value")
// And when you want to use that value just write
//req.flash("Name")
//And the important thing is flash message is working on session so you have 
//to install session package first to procede further

router.get('/flash', function(req,res){
  req.flash("Message","Hy i am value from flash page")
  res.render('flash')

})

module.exports = router;
