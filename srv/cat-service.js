const cds = require("@sap/cds");

module.exports = cds.service.impl( async function() {
    const {Books} = this.entities;

    this.before("CREATE", "Books", (req) => {
        console.log("req");
        if( req.data.price > 100){
            req.reject(400, "Price can not be more than 100")
        }
    });
    this.after("READ","Books", (res) => {
        for (let index = 0; index < res.length ; index++) {
            res[index].tags = "*****";
        }
    });

});
