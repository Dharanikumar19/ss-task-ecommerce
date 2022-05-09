const router = require("express").Router()
const  { postal_codes, products } = require("../data") ;
const { searchPostalCode, searchProduct } = require("../helperFunctions") ;

router.get("/product/:id", async (req, res) => {
    if (products.length > 0) {
      const result = searchProduct(products, req.params.id);
      if (result.status === "error") res.status(400).send(result);
      else res.status(200).send(result);
    } else res.status(200).send("Product not available");
  });

  router.get("/warehouse/distance", async (req, res) => {
    if (postal_codes.length > 0) { 
      const result = searchPostalCode(postal_codes, req.query.postal_code);
      if (result.status === "error") res.status(400).send(result);
      else res.status(200).send(result);
    } else res.status(200).send("Invalid Postal Code");
  });


module.exports = router

