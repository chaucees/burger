// Linked files
var connection = require('../config/connection.js');

// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

var orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, res) {
            if (err) throw err; 
            console.log(result);
        });
    },
    insertOne: function() {
        var queryString = "INSERT INTO burgers";
        connection.query(queryString);
    },
    updateOne: function() {
        var queryString = "UPDATE burgers WHERE ?? = ?";
        connection.query(queryString);
    }
}

// selectAll() 

// insertOne() 

// updateOne()


// Export
module.exports = ORM;