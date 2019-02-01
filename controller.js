const DBCollection  = require("./models");

module.exports = {

    getAll: (req, res)=>{
        DBCollection.find()
            .then(result => console.log("got all") || res.json(result))
            .catch(errors => console.log(errors) || res.json(errors));
    },
    
    getOne: (req, res) =>{
        console.log(req.params.id)
        DBCollection.findById(req.params.id)
            .then(result => console.log(result) || res.json(result))
            .catch(errors => console.log(errors) || res.json(errors));
    },

    create: (req, res) =>{
        const DATA = req.body;
        DBCollection.create(DATA)
            .then(result => res.json(result))
            .catch(errors => res.json(errors));
    },
    
    update: (req, res) =>{
        const ID = req.params.id;
        console.log(ID);
        DBCollection.findByIdAndUpdate(ID,req.body)
            .then(result => res.json(result))
            .catch(errors => res.json({"error":errors}));
    },
    createNested: (req, res) =>{
        console.log("this is request body")
        console.log(req.body);
        console.log("this is request body")
        const ID = req.params.id;
        DBCollection.findByIdAndUpdate(ID, {$push: {comments: req.body}})
            .then(result =>res.json(result))
            .catch(errors => res.json(errors));
    },

    delete: (req, res) => {
        const ID = req.params.id;
        console.log("this is ID to delete", ID)
        DBCollection.findByIdAndDelete(ID)
            .then(result => console.log("deleted") || res.json(result))
            .catch(errors=> console.log(errors) || res.json(errors));
    },

}
