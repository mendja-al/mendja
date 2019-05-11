const express = require("express");
var exphbs = require("express-handlebars");
var hbs = require("handlebars");
const path = require("path");

const APIRouter = require("./api-router");

module.exports = ((app) => {
	app.use('/public', express.static(path.resolve(__dirname,"..","..",'public')));
	app.engine("handlebars", exphbs({ defaultLayout: "main" }));
	app.set("view engine", "handlebars");

	app.use('/api', APIRouter);

	app.get("*",(req,res) => {
		res.render("index");
	});
});
