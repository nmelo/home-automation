var config = require("./config.js").config;
var dash_button = require('node-dash-button');
var lifxObj = require('lifx-api');
var lifx = new lifxObj(config.lifx_access_token);

var dash = dash_button("10:ae:60:a3:bf:06"); //address from step above
dash.on("detected", function (){

    console.log("Toggling all lights");
    lifx.togglePower("all", function(){
      console.log("Lights toggled");
    });
});
