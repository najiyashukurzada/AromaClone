const mongoose = require('mongoose');
const express = require('express');
const Joi = require('joi');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use (cors());

const AromaShema = new mongoose.Schema({
    img: String,
    name: String,
    description: String,
    price: Number,
})

// const addAromaShema = Joi.object({
//     img: Joi.string().required(),
//     name: Joi.string().required(),
//     description: Joi.string().required(),
//     price: Joi.number().required(),
// })

const AromaModel = mongoose.model("aroma", AromaShema)
 
mongoose.set("strictQuery", false);
mongoose
  .connect(`mongodb+srv://najiya:najiya@cluster0.ldwafk6.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));

app.use(express.json());

app.get('/aromas', (req, res) => {
    AromaModel.find(null, "img name description price ",).exec((error, aromas) => {
        if (error) return res.status(500).send({error})
        res.send(aromas)
    })
})

app.post('/aromas', async (req, res) => {
    const newProduct = new AromaModel ({
        ...req.body

    })
    await newProduct.save()
    res.send(newProduct)
})

app.get("/aromas/:id", async (req, res) => {
    const { id } = req.params;
    const Aroma = await AromaModel.findById(id);
    return res.status(200).send({aroma: Aroma});
});

app.listen(PORT, () => {
    console.log("Server running on " + PORT);
});