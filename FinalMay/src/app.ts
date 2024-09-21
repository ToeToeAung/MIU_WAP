import express, {Request, Response, NextFunction} from'express';
import studentRouter from './routes/studentRouter';

const app = express();

app.use(express.json());

app.use('/students', studentRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({success: false, error: err.message});
});
app.listen(3000, () => console.log('listening to 3000...'));