const models = require('../models');
const Promise = require('bluebird');
const hashUtils = require('../lib/hashUtils');

module.exports.createSession = (req, res, next) => {
  let randomID = Math.random().toString(36).substring(7);
  let randomHash = hashUtils.createHash(randomID, hashUtils.createSalt());

  if (Object.keys(req.cookies).length === 0) {
    req.session = {hash: randomHash};
    res.cookies['shortlyid'] = {value: randomHash};
    next();
  } else {
    req.cookies['shortlyid'] = {value: randomHash};
    next();
  }

  console.log(res.cookies);
  
  // models.Sessions.create(randomID).then((error, data, field) => {
 
  // });


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
