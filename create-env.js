const fs = require("fs");
fs.writeFileSync(
  "./.env",
  `REACT_APP_apiKey=${process.env.REACT_APP_apiKey}\n
REACT_APP_authDomain=${process.env.REACT_APP_authDomain}\n
REACT_APP_databaseURL=${process.env.REACT_APP_databaseURL}\n
REACT_APP_projectId=${process.env.REACT_APP_projectId}\n
REACT_APP_storageBucket=${process.env.REACT_APP_storageBucket}\n
REACT_APP_messagingSenderId=${process.env.REACT_APP_messagingSenderId}\n
REACT_APP_appId=${process.env.REACT_APP_appId}\n
REACT_APP_measurementId=${process.env.REACT_APP_measurementId}\n
REACT_APP_logo=${process.env.REACT_APP_logo}\n`
);
