import express, { Request, Response } from 'express';
import { ArticleService } from './article.service';

const articleService = new ArticleService();
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    const { title, content, description, category, imageURL } = req.body;
    const newArticle = await articleService.createArticle(title, content, description, category, imageURL);
    res.json(newArticle);
});

router.get('/', async (_req: Request, res: Response) => {
    const articles = await articleService.getArticles();
    res.json(articles);
});

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const article = await articleService.getArticleById(id);
    res.json(article);
});

router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, content, description, category, imageURL } = req.body;
    const updatedArticle = await articleService.updateArticle(id, title, content, description, category, imageURL);
    res.json(updatedArticle);
});

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    await articleService.deleteArticle(id);
    res.json({ message: 'Article deleted successfully.' });
});

export default router;
