/**
 * Runs the query and return a promise
 * 
 * @param pConnection The Connection itself 
 * @param pSql SQL query to execute
 * @param pParams Params for the SQL query
 * @param pPrintSql If true, shows the executed SQL (debugs only)
 */
exports.promisedQuery = function(pConnection, pSql, pParams, pPrintSql){
	return new Promise((resolve, reject) => {						
		return pConnection.query(pSql, pParams, function(err, result){
			if(err){
				reject(err);
			} else {
				if (pPrintSql) {
					console.log("promisedQuery -> Executed SQL: ", this.sql);
				}
				resolve(result);
			}
		});
	});
}