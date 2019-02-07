var data = require("../data.json");

exports.addFriend = function(request, response) {    

	var newFriend = {
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": "http://lorempixel.com/400/400/people"
	}

	console.log("name: " + request.query.name);
	console.log("description: " + request.query.description);

	data.friends.push(newFriend);
	response.render('index', data);

 }