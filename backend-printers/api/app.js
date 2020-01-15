var express = require("express");
var cors = require("cors");
const ThermalPrinter = require("node-thermal-printer").printer;
const Types = require("node-thermal-printer").types;
var htmlLog =
  "<h6 style='margin: 30px 0 10px;font-size: 16px;text-align: left;'>Erros:</h6>";
var addresses = ["tcp://192.168.0.98:9100", "tcp://192.168.0.99:9100"];
// const electron = require("electron");
require("dotenv").config();

console.log(process.env);

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.ELECTRON_WEBPACK_APP_apiKey,
  authDomain: process.env.ELECTRON_WEBPACK_APP_authDomain,
  databaseURL: process.env.ELECTRON_WEBPACK_APP_databaseURL,
  projectId: process.env.ELECTRON_WEBPACK_APP_projectId,
  storageBucket: process.env.ELECTRON_WEBPACK_APP_storageBucket,
  messagingSenderId: process.env.ELECTRON_WEBPACK_APP_messagingSenderId,
  appId: process.env.ELECTRON_WEBPACK_APP_appId,
  measurementId: process.env.ELECTRON_WEBPACK_APP_measurementId
});

// export const db = firebaseApp.firestore();
const db = firebaseApp.database();
// const auth = firebaseApp.auth();
var start = 0;
var ref = db.ref("orders");

var count = 0;
var countTotal = 0;
ref.once("value", function(snap) {
  console.log("initial data loaded!", snap.numChildren() === count);
  countTotal = snap.numChildren();

  ref.on("child_added", function(snapshot, prevChildKey) {
    let sendLog = "";

    // check if is not first loaded data
    if (count > countTotal) {
      let order = snapshot.val().order;
      let observation = snapshot.val().observation;
      let infos = snapshot.val().infos;

      addresses.map(address => {
        let printer = new ThermalPrinter({
          type: Types.EPSON,
          interface: address,
          removeSpecialCharacters: true
        });

        printer.drawLine();
        printer.tableCustom([
          {
            text: "PRODUTO",
            align: "LEFT",
            width: 0.5,
            bold: true
          },
          { text: "ADICIONAL", align: "CENTER", width: 0.25, bold: true },
          { text: "QUANTIDADE", align: "CENTER", width: 0.25, bold: true },
          { text: "PREÇO", align: "RIGHT", width: 0.25, bold: true }
        ]);
        order.map((item, index) => {
          printer.tableCustom([
            {
              text: item.category + " - " + item.product,
              align: "LEFT",
              width: 0.5
            },
            {
              text: item.additional ? item.additional : "--",
              align: "LEFT",
              width: 0.25
            },
            { text: item.qty, align: "CENTER", width: 0.25 },
            { text: "R$ " + item.price, align: "RIGHT", width: 0.25 }
          ]);
        });
        printer.drawLine();
        printer.bold(true);
        if (observation) {
          printer.print(observation);
          printer.newLine();
          printer.drawLine();
        }
        printer.newLine();
        printer.bold(false);
        printer.alignRight();
        printer.print((infos && infos.client) + "," + (infos && infos.table));
        printer.newLine();
        printer.print("Data/Hora:" + (infos && infos.data));
        printer.newLine();
        printer.drawLine();

        printer.newLine();
        printer.newLine();
        printer.newLine();
        printer.newLine();
        printer.newLine();
        printer.newLine();
        printer.newLine();
        printer.newLine();
        printer.newLine();
        sendLog = send(printer, address);
      });
    }
  });
});

// server
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(err, req, res, next) {
  res.status(500).json({ msg: "Server Error!" });
});

app.post("/print", function(req, res, next) {
  let sendLog = "";
  let order = req.body.order;
  let infos = req.body.infos;
  let observation = req.body.observation;

  addresses.map(address => {
    let printer = new ThermalPrinter({
      type: Types.EPSON,
      interface: address,
      removeSpecialCharacters: true
    });

    printer.drawLine();
    printer.tableCustom([
      {
        text: "PRODUTO",
        align: "LEFT",
        width: 0.5,
        bold: true
      },
      { text: "QUANTIDADE", align: "CENTER", width: 0.25, bold: true },
      { text: "PREÇO", align: "RIGHT", width: 0.25, bold: true }
    ]);
    order.map((item, index) => {
      printer.tableCustom([
        {
          text: item.category + " - " + item.product,
          align: "LEFT",
          width: 0.5
        },
        { text: item.qty, align: "CENTER", width: 0.25 },
        { text: "R$ " + item.price, align: "RIGHT", width: 0.25 }
      ]);
    });
    printer.drawLine();
    printer.bold(true);
    if (observation) {
      printer.print(observation);
      printer.newLine();
      printer.drawLine();
    }
    printer.newLine();
    printer.bold(false);
    printer.alignRight();
    printer.print(infos.client + "," + infos.table);
    printer.newLine();
    printer.print("Data/Hora:" + infos.data);
    printer.newLine();
    printer.drawLine();

    printer.newLine();
    printer.newLine();
    printer.newLine();
    printer.newLine();
    printer.newLine();
    printer.newLine();
    printer.newLine();
    printer.newLine();
    printer.newLine();
    sendLog = send(printer, address);
  });

  if (sendLog == "") {
    res.status(200).json("Imprimiu com sucesso!");
  } else {
    res.status(400).json(sendLog);
  }
});
app.listen(5000);

async function send(printer, item) {
  try {
    let execute = await printer.execute();
  } catch (error) {
    htmlLog += "Impressora: <strong>" + item + "</strong> falhou!<br>";
    document.querySelector(".logs").innerHTML = htmlLog;
    return false;
  }
}
module.exports = app;
