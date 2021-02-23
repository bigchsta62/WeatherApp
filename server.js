
const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
// import connectDB from "./backend/config/db.js";
// // import products from './DB/products.js'
// import productRoutes from "./backend/routes/productRoutes.js";
// import userRoutes from "./backend/routes/userRoutes.js";
// import orderRoutes from "./backend/routes/orderRoutes.js";
// import { notFound, errorHandler } from "./backend/middleware/errorMid.js";


dotenv.config();



const app = express();
//this is needed when using ECMAScript. __dirname and __filename don't exist
// const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
//This code was commented out to work with heroku
// app.get("/", (req, res, next) => {
//     res.send("Backend Begins...");
// });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'eco'));
// });

// app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/orders", orderRoutes);





// app.use(notFound);

// app.use(errorHandler);


const PORT = process.env.PORT || 8800;
//this configuration is required for heroku
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});