const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/
// module.exports.createUser = (req, res, next) => {
//   models.Users.get({username: req.body.username}).then((results)=> {
//     if (result) {
//       next();
//     } else {
//       models.Users.create(req.body).then(() => {
//       //log the user in
//       //run next
//         res.sendStatus(200);
//         console.log('added user');
//         next();
//       });
//     }
//   }
// };