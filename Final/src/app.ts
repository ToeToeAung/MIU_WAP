import express, {Request, Response, NextFunction} from'express';

import productRouter from './routes/productRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({success: false, error: err.message});
});

app.listen(3000, () => console.log('listening to 3000...'));