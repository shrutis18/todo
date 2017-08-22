var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Item = require('./model/task');

function MongoService() {

  var dbUrl = "mongodb://localhost/todotasks";
  var conn = mongoose.connect(dbUrl);
  //mongoose.set('debug', true);
  console.log("heyyyyyyyyyyyyy");

        function addItem(item){
            return new Promise((resolve,reject) => {
            conn
                .then(() => {
                        item.save()
                            .then((event) => {
                                resolve("Item added Succesfully");
                            })
                            .catch((error) => {
                                reject(error);
                            })  
                    } )
                .catch((error) => {
                console.log("connection failed!!",error);
                })
            })
        }

        function getItems(){
           return(Item.find());
        }

        return {
            addItem :addItem,
            getItems : getItems
        }
}

module.exports = MongoService;