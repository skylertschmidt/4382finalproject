{"filter":false,"title":"user_model.js","tooltip":"/user_model.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":12,"column":34},"action":"insert","lines":["var mongoose = require(\"mongoose\"),","Schema = mongoose.Schema;","","var UserSchema = new Schema({","    username:{type: String, unique: true},","    name:String,","    email:String,","    color:String,","    hashed_password:String,","    profilePic: String","});","","mongoose.model('User',UserSchema);"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":11,"column":0},"end":{"row":11,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1417376712877,"hash":"dace29d2efe616750de38ff3faa3a18ffed2c0e3"}