const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products' , productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});