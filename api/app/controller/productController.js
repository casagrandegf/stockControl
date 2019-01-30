/**
 * On production, <console.log("err: ", err)> must be changed to an error handler, to keep tracking errors on real scenarios.
 * 
 */

ProductController = function(app){
  this._app = app;
	this._connection = new app.model.connectionFactory();  
	this._product = new app.model.Product(this._connection);
}

ProductController.prototype.insertProduct = function(pProduct) {
  return this._product.insert(pProduct)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log("err: ", err);
      return err;
    })
}

ProductController.prototype.getProducts = function(pProduct) {
  return this._product.select(pProduct)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log("err: ", err);
      return err;
    })
}

ProductController.prototype.updateProduct = function(pProduct) {
  return this._product.update(pProduct)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log("err: ", err);
      return err;
    })
}

ProductController.prototype.deleteProduct = function(pProduct) {
  return this._product.delete(pProduct)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log("err: ", err);
      return err;
    })
}

module.exports = function(){
	return ProductController;
}