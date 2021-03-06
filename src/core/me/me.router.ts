import express from 'express';
const router = express.Router();
import {Request, Response} from 'express';
import {mongoosesToObject} from '../../utils/mongoose';
import ArticleModel from '../../models/Articles';

// Show page
router.get('/stored/articles', async (req: Request, res: Response) => {
    const articles = await ArticleModel.find({deleted: false});
    try {
        return res.render('me/stored-articles', {
            articles: mongoosesToObject(articles)
        });
    } catch (error) {
        console.log(error);
    }
});

router.get('/trash/articles', async (req: Request, res: Response) => {
    const articles = await ArticleModel.find({deleted: true});
    try {
        return res.render('me/trash-articles', {
            articles: mongoosesToObject(articles)
        });
    } catch (error) {
        console.log(error);
    }
});

export default router;
