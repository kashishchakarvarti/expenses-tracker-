var User = require('../app/models/user');
var router = require('express').Router();
var bcrypt   = require('bcrypt-nodejs');

module.exports = function(passport){

    // ================ SIGNUP AND LOGIN ROUTES ===================//
    router.post('/login',function(req,res){
    	passport.authenticate('local-login', authHandlerLocal(req,res))(req,res)
    });
    router.post('/signup',function(req,res){
    	if(req.body.email && req.body.password && req.body.name){
    		User.findOne({email:req.body.email},function(err,data){
    			if(err) res.status(403).json({"success":false,"message":"try again"})
    			if(data) res.status(403).json({"success":false,"message":"username/email already exists."})
   					else {
						var newUser = new User();
			    		newUser.email = req.body.email
			    		newUser.name = req.body.name
                        if(!req.body.role){
                        
                            newUser.role = 'user'
                        }
			    		newUser.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null)

		    		}
    		})
    	} else res.status(400).json({"success":false,"message":"Wrong format"})
    })

    // ============= OTHER ROUTES =======================//
    router.get('/profile', isLoggedIn, function(req, res) {
        res.status(200).json({success:true,data:req.user});
    });

    router.get('/logout', function(req, res) {
        req.logout();
        res.status(200).json({"success":true})
    });

	return router;
};

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    res.status(403).json({success:false,message:"NOT AUTHORISED"});
}

function authHandlerLocal(req,res){
	return function(err, user, info) {
	    if (err) return res.status(401).json({success:false,message:info.message})
	    if (!user) return res.status(401).json({success:false,message:info.message});
	    req.logIn(user, function(err) {
	      if (err) return res.status(401).json({"success":false,"message":"Somthing went wrong try again"})
	      return res.status(200).json({"success":true,role:req.user.role})
	    });
	 }
}