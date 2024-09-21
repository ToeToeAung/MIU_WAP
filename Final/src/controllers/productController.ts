import { Request, Response, NextFunction } from "express"
import Product from "../models/product";

export const saveRating = (req: Request, res: Response) => {
    const { productId } = req.params;
    res.status(200).json({ success: true, data: Product.saveRating(parseInt(productId), req.body) });
}

export const getAverageRatings = (req: Request, res: Response) => {
    res.status(200).json({ avg: Product.getAverageRatings(Number(req.params.productId)) });
}

export const getRatedProductsByUserId = (req: Request, res: Response) => {
    res.status(200).json(Product.getRatedProductsByUserId(req.query));
}

export const deleteProductById =(req : Request,res : Response) => {
    res.status(200).json({success: true, data : Product.deleteProductById(parseInt(req.params.productId))});
}

export const getAllProducts = (req : Request, res : Response) => {
    res.status(200).json({success: true, data : Product.getAllProducts()})
}

export const getProductById = (req : Request, res : Response) => {
    res.status(200).json({success : true, data : Product.getProductById(parseInt(req.params.productId))});
}