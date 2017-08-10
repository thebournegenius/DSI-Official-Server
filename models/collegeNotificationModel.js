const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollegeNotificationSchema = new Schema({
     messageTitle:{
          type: String,
          required: [true, "Message title cannot be left empty !"]
     },
     message:{
          type: String,
          required: [true, "Message cannot be left empty !"]
     },
     messageLevel:{
          type: String,
          required: [true, "Message level cannot be left empty !"]
     }
});

const CollegeNotification = mongoose.model('CollegeNotification', CollegeNotificationSchema);
module.exports = CollegeNotification;
