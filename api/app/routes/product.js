/**
 * Possible routes for an product (insert, select, etc...)
 */

module.exports = function (app) {

	app.post('/product', function (req, res) {
		var product = req.body;
		var productController = new app.controller.productController(app);

		productController.addProduct(product)
			.then((result) => {
				res.send(result);
			})
			.catch((err) => {
				res.send(err);
			});
  });
  
	app.get('/product', function (req, res) {
		var productController = new app.controller.productController(app);

		productController.getProducts()
			.then((result) => {
				res.send(result);
			})
			.catch((err) => {
        console.log("err", err);
				res.send(err);
			});

  });

	app.put('/product', function (req, res) {
		var product = req.body;
		var productController = new app.controller.productController(app);

		productController.updateProduct(product)
			.then((result) => {
				res.send(result);
			})
			.catch((err) => {
				res.send(err);
			});
	});

	app.delete('/product', function (req, res) {
		var product = req.query.prod_id;
		var productController = new app.controller.productController(app);

		productController.deleteProduct(product)
			.then((result) => {
				res.send(result);
			})
			.catch((errProduct) => {
				res.send(errProduct);
			});
	});
}

