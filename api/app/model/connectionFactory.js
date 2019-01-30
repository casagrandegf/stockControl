/**
 * Connection with database <MySQL>
 */
var mysql = require('mysql');


ConnectionFactory = function(){

  return this.createConnection();
}

ConnectionFactory.prototype.createConnection = function(pDBName){
      
  return mysql.createConnection({
      host : 'localhost',
      port : 3306,
      user : 'root',
      password :  'stockControl',
      database : 'stockControl'    
    });	      
};


ConnectionFactory.prototype.end = function(){
  this._connection.end();
}

module.exports = function(){
	return ConnectionFactory;
}