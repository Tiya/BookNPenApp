var userDetails = new userModel({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role:'User'    
  });