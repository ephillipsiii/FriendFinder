var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {
	// console.log('___ENTER apiRoutes.js___');

	app.get('/api/friends', function(req, res) {
		res.json(friends);
    });

	app.post('/api/friends', function(req, res){
		var userInput = req.body;
		var userResponse = userInput.choices;
		var matchName = '';
		var matchPic = '';
		var totalDifference = 10000;

		for (var i = 0; i < friends.length; i++){
			var difference = 0;
			for (var j = 0; j < userResponse.length; j++){
				difference += Math.abs(friends[i].answers[j] - userResponse[j]);
			}

			if (difference < totalDifference){
				totalDifference = difference;
				matchName = friends[i].name;
				matchPic = friends[i].photo;
				
			}
		}
		friends.push(userInput);
		res.json({status: 'OK', matchName: matchName, matchPic: matchPic});
	});
	};

	
