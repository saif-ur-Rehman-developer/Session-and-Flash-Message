var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res,) {
  res.render('index', { title: req.flash('Message') });
});
router.get('/flash', function(req,res){
  req.flash("Message","Hy i am value from flash page")
  res.render('flash')

})

module.exports = router;
