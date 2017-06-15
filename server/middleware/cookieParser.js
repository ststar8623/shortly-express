const parseCookies = (req, res, next) => {
  if (Object.keys(req.headers).length > 0) {
    let cookie = req.headers.cookie.split('; ');
    let obj = {};
    cookie.forEach(el => {
      let first = el.split('=')[0];
      let second = el.split('=')[1];
      obj[first] = second;
    });
    req.cookies = obj;
  } else {
    req.cookies = {};
  }
  next();
};

module.exports = parseCookies;