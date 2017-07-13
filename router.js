//TODO the router need to build
/**
 * this is a User
 * @method      User
 * @param       {String} name [description]
 * @param       {Number} age  [description]
 * @constructor
 */
function Router(){
  console.log('this is router')
}

Router.prototype = {
User:function(name,age){
  this.name = name;
  this.age
},

/**
 * [create description]
 * @method createUser
 * @param  {[type]} name [description]
 * @param  {[type]} age  [description]
 * @return {[type]}      [description]
 */
createUser:function(name,age){
  return new this.User(name,age)
},


/**
 * [getName description]
 * @method getName
 * @param  {User} user [description]
 * @return {Number}      [description]
 */
getName:function(user){
  return user.name;
}
}

module.exports = Router;
