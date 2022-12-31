const express = require("express");
const { MongoClient } = require("mongodb");
const router = express.Router();

router.get("/contact", (req, res) => {
  const contact = "contact";
  res.render("pages/contact", { contact });
});

router.post("/contact", (req, res) => {
  const contact = "contact";
  console.log("hiiiiiiiiii")

  async function addCustomer() {

    const uri =
    process.env.MONGODB_URI || "mongodb+srv://jameslegoff:HadefMni69James@designocluster.gkgcuwa.mongodb.net/designo";
  
    const client = new MongoClient(uri);
  

    try {
      const database = client.db('designo');
  
      const collection = database.collection('customers');
        const customer = {
         name: req.body.name,
         email: req.body.email,
         phone_number: req.body.phone_number,
         message: req.body.message,
       };
      const result = await collection.insertOne(customer);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);

  
    } finally {
      // Ensures that the client will close when you finish/error
      // await client.close();
    }
  }
  addCustomer()
    .then(() => {
      res.render("pages/contact", { contact });
    })
    .catch(() => {});




  //   try {
  //     const db = client.db("designo");
  //     console.log(db);
  //     const collection = db.collection("customers");
  //     console.log(collection);
  //     const customer = {
  //       name: req.body.name,
  //       email: req.body.email,
  //       phone_number: req.body.phone_number,
  //       message: req.body.message,
  //     };
  //     const result = await collection.insertOne(customer);
  //     console.log(`A document was inserted with the _id: ${result.insertedId}`);
  //   } catch (error) {
  //     console.log(error, "Something went wrong");
  //   }
  // }
});

module.exports = router;
