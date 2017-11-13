var mongoose = require('mongoose');
var User = mongoose.model("User");

module.exports = {
	index: function(req,res){
		User.find({},function(err,users){
			if(err){
				console.log(err);
			}
			res.json(users);
		})
	},
	create: function(req,res){
		var user = new User({name: req.params.name});
		user.save(function(err){
			if(err){
				console.log("CREATE ERROR: ", err);
			}
			res.redirect('/');
		})
	},
	destroy: function(req,res){
		User.remove({name: req.params.name},function(err){
			if(err){
				console.log("REMOVE ERROR: ",err);
			}
			res.redirect('/');
		})
	},
	show: function(req,res){
		User.findOne({name: req.params.name}, function(err,user){
			if(err){
				console.log("Show Error: ", err);
			}
			res.json(user);
		})
	}
}