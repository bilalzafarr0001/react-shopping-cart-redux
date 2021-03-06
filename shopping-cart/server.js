const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const shortid=require("shortid");

const app= express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/react-shopping-cart-db",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

const Product =mongoose.model("products", new mongoose.Schema({
        _id: { type:String, default:shortid.generate },
        title: String,
        description:String,
        image:String,
        availableSizes: [String],
        price:Number
})
)

const Order = mongoose.model("order", new mongoose.Schema(
    {
        _id:{
            type:String,
            default: shortid.generate,
        },
        email:String,
        name:String,
        address:String,
        total:Number,
        cartItems :[
          {
            _id:String,
            title:String,
            price:Number,
            count:Number,
          }
               ]
    },
    {
        timestamps:true
    }
    ))

app.get("/api/products",async (req,res) => {

    const products = await Product.find({});
    res.send(products);
})

app.post("/api/products",async (req,res) => {

    const newProduct = new Product(req.body);
    const saveProducts = await newProduct.save();
    res.send(saveProducts);
})


app.delete("/api/products/:id",async (req,res) => {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deleteProduct);
})


app.post("/api/orders" , async (req,res) => {
    if(!req.body.name || !req.body.email ||  !req.body.address || !req.body.total || !req.body.cartItems){
        return res.send({message : " Data is Required !"})
    }
    const newOrder = new Order(req.body);
    const order= await newOrder.save();
    res.send(order);
})



app.get("/api/orders",async (req,res) => {

    const orders = await Order.find({});
    res.send(orders);
})


const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log("server is running on port 5000"));
 