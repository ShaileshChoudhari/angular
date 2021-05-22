const mongoose = require('mongoose');

const URI = 'mongodb+srv://dbuser:dbuser@cluster0.bcgd2.mongodb.net/eventsdb?retryWrites=true&w=majority';

const connectDB = async () => {
    await mongoose.connect(URI, err => {
        if (err)
            console.error('DB Connection Error: ' + err);
        else
            console.info('***** DB Connected *****');
    }, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
};

module.exports = connectDB;