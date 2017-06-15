const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  console.log('createsession: ', req.session);
  console.log('responsecookie: ', req.cookies);
  if (Object.keys(req.cookies).length === 0) {
    req.session = {hash: 'exists'};
  }
  models.Sessions.create('y56y').then((error, data, field) => {
    console.log('result: ', error);
  });


  next();
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
