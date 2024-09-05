
let products = []; //in memory storage for products

//get all products >>

const getProducts = (req,res) => {
    res.json(products);
};

//create a new product >>

const createProduct = (req,res) => {
    const {name , type , price , details , image} = req.body;

    const newProduct = {
        id : products.length + 1,
        name,
        type,
        price,
        details,
        image,
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
};

module.exports = {getProducts , createProduct};