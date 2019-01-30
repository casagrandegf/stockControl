var utils = require('../common/utils');

function Product(connection){
	this._connection = connection;
}

Product.prototype.insert = function(pProduct){
  var params = [pProduct.prod_name, pProduct.prod_quantity];
  var sql = 'INSERT INTO prod_product ' +
            ' (prod_quantity, prod_name) ' +
            ' VALUES (?, ?) ';

  return utils.promisedQuery(this._connection, sql, params);
}

Product.prototype.select = function(){
  var sql = ' SELECT * FROM prod_product WHERE 1=1';
  var params = [];

  return utils.promisedQuery(this._connection, sql, params);
}

Product.prototype.update = function(pProduct){
  var params = [pProduct.prod_quantity, pProduct.prod_id];
  var sql = ' UPDATE prod_product ' +
            ' SET prod_quantity=? ' +
            ' WHERE prod_id=? ';

  return utils.promisedQuery(this._connection, sql, params);
}

Product.prototype.delete = function(pProd_id){
  var params = [pProd_id];
  var sql = ' DELETE FROM pod_product ' +
            ' WHERE prod_id=? ';

  return utils.promisedQuery(this._connection, sql, params);
}


module.exports = function(){
	return Product;
}
