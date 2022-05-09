const router = require("express").Router()
const cartControl = require("../controllers/cartController")

router.route("/cart/item")
    .post(cartControl.createCartItems)

router.route("/cart/items")
    .get(cartControl.getCartItems)

router.route("/cart/items")
    .delete(cartControl.deleteCartItems)

module.exports = router