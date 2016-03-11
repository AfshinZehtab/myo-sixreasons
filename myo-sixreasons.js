var Myo = require("myo");
Myo.connect("com.sixreasons.myo-armband");


Myo.on("connected", function(data, timestamp) {
  console.log("Myo successfully connected. Data: " + JSON.stringify(data) + ". Timestamp: " + timestamp + ".");
});

Myo.on("pose", function(pose_name) {
  console.log("Myo pose detected! Pose was: " + pose_name + ".");
});

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


