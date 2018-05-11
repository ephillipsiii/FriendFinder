var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {
	// console.log('___ENTER apiRoutes.js___');

	app.get('/api/friends', function(req, res) {
		res.json(friends);
    });
}
	app.post('/api/friends', function(req, res){
		var userInput = req.body;
		var userResponse = userInput.choices;
	})
