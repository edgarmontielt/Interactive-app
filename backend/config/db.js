const { default: mongoose } = require("mongoose");
const { host, dbName } = require(".");

const connection = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://${host}/${dbName}`)
        console.log(conn.connection.host);
    } catch (error) {
        console.log(error);
    }
}

module.exports =  { connection, mongoose }