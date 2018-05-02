"use strict";

const db = require("./database").db;

db.any("SELECT * FROM books WHERE author = \'Ally Carter\'")
.then((data) => {
    data.forEach((item)=>{
        console.log("Title: ", item.title);
        console.log("Author: ", item.author);
    });
});
