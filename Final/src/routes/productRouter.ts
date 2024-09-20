
import express from 'express';
import { saveRating, getAverageRatings, getRatedProductsByUserId } from '../controllers/productController';

const router = express.Router();

router.put('/:productId/ratings', saveRating);
router.get('/:productId/getAverageRatings', getAverageRatings);
router.get('/ratings', getRatedProductsByUserId);

export default router;
