const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//mongodb+srv://bss5188:Metro3310@team10.vpmry.mongodb.net/TEAM10?retryWrites=true&w=majority


const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected 👍👍');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;