"use strict";
const fs = require('fs');

/*
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/phones";
*/

const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "verbovista"
});
con.connect();

const min = 2250;
const max = 4550;

exports.get_text_between = function(text, start_w, end_w){
    let start = text.indexOf(start_w);
    let r_text = text.substring(start);
    let end = r_text.indexOf(end_w);
    r_text = r_text.substring(start_w.length, end+end_w.length);

    return r_text;
};

exports.sleep = () => {
    const ms = Math.floor(Math.random() * (max - min + 1) + min);

    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

exports.str_to_int = (str) => {
    str = str.replace(/[^0-9]/, '');
    str = str.trim();
    return parseInt(str);
};


exports.getCon = () => {
    return con;
}

exports.writeInMysqlDB = (inf, values) => {
    var sql = "INSERT INTO meanings (verb, meanings) VALUES ('"+inf+"', '"+values+"')";
    con.query(sql, function (err, result) {
        //if (err) throw err;
        //console.log("1 record inserted");
    });
}

exports.updateInMysqlDB = (inf, values) => {
    var sql = "UPDATE meanings SET en = '"+values+"' WHERE verb = '"+inf+"'";
    con.query(sql, function (err, result) {
        //if (err) throw err;
        //console.log("1 record inserted");
    });
}



exports.userInputRequired = () => {
    console.log("Se requiere acción de un humano");
    sound.play('C:\\alert.mp3');
    console.log("INTRODUCIR CAPTCHA O TOMAR ACCIONES..."); // Hacer debug sobre esta linea para revisar lo que esta pasando!
}

/**
 * Write the url with the error in log:
 * @param url
 */
exports.writeLog = function(url) {
    fs.appendFile('errors.txt', url + " \n", function (err) {
        if (err) throw err;
        console.log('Error added to errors.txt!');
    });
}
