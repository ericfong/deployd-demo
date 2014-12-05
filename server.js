var deployd = require('deployd')
  , options = {port: 3000};

options.db = {
    host:'localhost', port:27017,
    name: 'nolock',
    credentials: {
        username: "hi",
        password: "h22",
    }
}

var dpd = deployd(options);

dpd.listen();
