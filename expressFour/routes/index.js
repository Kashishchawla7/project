var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var empModel = mongoose.model('Datas');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/reg',function(req,res){
  // var empData = new empModel(req.body);
  // empModel.create(empData,function(err,result){
    // if(err) throw err;
    // console.log("Data inserted");
    // res.redirect('/view');
    res.render('reg');
  });
// });

router.get('/log',function(req,res){
  res.render('log');
});

router.post('/submit',function(req,res){
  var empData = new empModel(req.body);
  empModel.create(empData,function(err,result){
    if(err) throw err;
    console.log("Data inserted");
    res.redirect('/view');
  });
});

router.get('/view',function(req,res){
  empModel.find({},function(err,result){
    if(err) throw err;
    res.render('view',{"result":result});
  });
});

router.get("/edit",function(req,res){
  var id = mongoose.Types.ObjectId(req.query.id);
    empModel.find({_id:id},function(err,result){
      if(err) throw err;
      res.render("edit",{"result":result});
  });
});

router.post("/editdetails",function(req,res){
  var id = mongoose.Types.ObjectId(req.body.id);
  var newDoc = 
  {
    "name" : req.body.name,
    "email" : req.body.email,
    "number" : req.body.number,
  }

  empModel.updateOne({_id:id},newDoc,function(err,response){
    if(err) throw err;
    res.redirect("/view");
  });
});

router.get("/delete",function(req,res){
  var id = mongoose.Types.ObjectId(req.query.id);

  empModel.remove({_id:id},function(err,result){
    if(err) throw err;
    res.redirect("/view");
  });
});

router.post("/login",function(req,res){
  var name = req.body.name;
  var pwd = req.body.password;
  console.log(name+"   "+pwd);
  empModel.find({$and:[{name:name},{password:pwd}]},function(err,result){
    if(err) 
    {
      throw err;
    }
    console.log(result.length);
      // res.send("<p>Fail</p>");
    // res.send("<p>success</p>");
    if(result.length>0)
    {
      console.log("Success");
      res.redirect("/view");
    }
    else{
      console.log("Login failed");
    }
  });
});

module.exports = router;