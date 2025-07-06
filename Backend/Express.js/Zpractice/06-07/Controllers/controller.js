import carts from '../lib/carts.js';
import posts from '../lib/posts.js';
import productlist from '../lib/product.js';

const getproducts = (req, res) => {
    console.log("Fetching products...");
    res.send(productlist);
    console.log("Product Delivered Successfully");
}

const getposts = (req, res) => {
    console.log("Fetching posts...");
    res.send(posts);
    console.log("Posts Delivered Successfully");
}

const getcarts = (req,res) => {
    console.log("Fetching Carts...");
    res.send(carts);
    console.log("Carts Delivered Successfully");
}

export { getproducts, getposts, getcarts };