import { NextFunction, Request, Response } from "express";
import Article from '../models/Articles';
import { mongoosesToObject } from '../../util/mongoose';

class SiteController {
    // [GET] /
    index(req: Request, res: Response, next: NextFunction) {
        Article.find({})
            .then(articles => {
                res.render('home', {
                    articles: mongoosesToObject(articles)
                })
            })
            .catch(next);
    }
}

export default new SiteController;