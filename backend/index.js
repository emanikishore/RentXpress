const express = require("express")
const app = express()
require("dotenv").config()

const cors = require("cors")

const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY)

app.use(express.json())
app.use(cors({origin:"http://localhost:5174"}));

app.post("/checkout",async(req,res)=>{
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            mode:"payment",
            lines_items:req.body.items.map(item=>{
                return{
                    price_data:{
                        currency:"inr",
                        product_data:{
                            name:item.name
                        },
                        unit_amount:(item.price)*100
                    },
                    quantity:item.quantity
                }
            }),
            success_url:"http://localhost:5174/success",
            cancel_url:"http://localhost:5174/cancel"
        })

        res.json({url:session.url})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

app.listen(8000)