var users = require('../../app/controllers/users.server.controller');

module.exports = function(app){
	app.route('/users')
		.post(users.create)
		.get(users.list);

	app.route('/users/:userId')
		.get(users.read)
		.put(users.update)
		.delete(users.delete);

	// app.route 실행전에 먼저 실행된다.
	app.param('userId', users.userById);
};