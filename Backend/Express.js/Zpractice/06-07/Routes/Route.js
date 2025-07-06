import express from 'express';
import { getproducts, getposts, getcarts } from '../Controllers/controller.js';
const router = express.Router();

router.get('/products', getproducts);
router.get('/posts', getposts);
router.get("/carts",getcarts);

export default router;