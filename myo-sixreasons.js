var Myo = require("myo");
Myo.connect("com.sixreasons.myo-sixreasons");


// Myo.on('pose', function(pose_name){
//     console.log('Started ', pose_name);
// });
// var myMyo = Myo.create();
// myMyo.on('wave_in', function(edge){
//     Menu.left()
// })

// Myo.on("connected", function(data, timestamp) {
//   console.log("Myo successfully connected. Data: " + JSON.stringify(data) + ". Timestamp: " + timestamp + ".");

// });

// Myo.on("pose", function(pose_name) {
//   console.log("Myo pose detected! Pose was: " + pose_name + ".");
// });

// Myo.on('gyroscope', function(data) {  
// 	if (data.x > 100){
// 	console.log("X");
// 	}
// 	else if (data.y > 100){
// 	console.log("Y");
// 	}
// 	else if (data.z > 100){
// 	console.log("Z");
// 	}
// });


// Myo.connect('com.stolksdorf.myAwesomeApp');

// Myo.on('fist', function(){
// 	console.log('Hello Myo!');
// 	this.vibrate();
// });

// Myo.on("fingers_spread", function() {
//   console.log("Fingers spread!");
//   console.log(this);
// });

// Myo.on("pose", function(pose_name) {
//   switch (pose_name) {
//     case "wave_in":
//     case "wave_out":
//       console.log("You are waving!");
//       break;
//   }
// });


