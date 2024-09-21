
import express from 'express';
import { saveRating, getAverageRatings, getRatedProductsByUserId, deleteProductById, getAllProducts } from '../controllers/productController';

const router = express.Router();

router.put('/:productId/ratings', saveRating);
router.get('/:productId/getAverageRatings', getAverageRatings);
router.get('/ratings', getRatedProductsByUserId);
router.delete('/:productId',deleteProductById);
router.get('/',getAllProducts);

export default router;
