dash_button = require('node-dash-button');

var dash = dash_button("10:ae:60:a3:bf:06"); //address from step above
dash.on("detected", function (){
    console.log("omg found");
});
