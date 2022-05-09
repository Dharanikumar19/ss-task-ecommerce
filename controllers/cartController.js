const Cart = require("../models/cartSchema");


const cartControl = {
    getCartItems : async (req, res) => {
        try {
            const cart = await Cart.find()
            if(cart.length < 0)  return res.status(400).json({ status : "error", message: "Cart is Empty" })
            
            res.json({
                status: 'success',
                message : "Item available in the cart",
                cart: cart
            })
        } catch (error) {
            return res.status(500).json({ status : "error", message: error.message })
        }
    },
    createCartItems : async (req, res) => {
        try {
            const { product_id, description, quantity } = req.body;
           
            const product = await Cart.findOne({ product_id })
            if (product)
                return res.status(400).json({ status : "error", message: "This Product already exits in the Cart" })

            const newProduct = new Cart({
                product_id, description, quantity
            })
            await newProduct.save()
            res.json({ status : "success" , message: "Item has been added to cart" })

        } catch (error) {
            return res.status(500).json({ status : "error", message: error.message })
        }
    },
    deleteCartItems : async (req, res) => {
        try {
            await Cart.deleteMany()
            res.json({ status: "success", message: "All items have been removed from the cart !" })
        } catch (error) {
            return res.status(500).json({ status : "error", message: error.message })
        }
    }
}

module.exports = cartControl