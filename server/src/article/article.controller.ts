import express, { Request, Response } from 'express';
import { validationResult, body } from 'express-validator';
import { ArticleService } from './article.service';
import createError from 'http-errors';

const articleService = new ArticleService();
const router = express.Router();

const createArticleValidationRules = [
    body('title').notEmpty().withMessage('Title is required').isLength({ min: 2 }).withMessage('Title must have at least 2 characters'),
    body('content').notEmpty().withMessage('Content is required').isLength({ min: 2 }).withMessage('Content must have at least 2 characters'),
    body('description').notEmpty().withMessage('Description is required').isLength({ min: 2 }).withMessage('Description must have at least 2 characters'),
    body('category').notEmpty().withMessage('Category is required'),
    body('imageURL').notEmpty().withMessage('Image URL is required'),
];

router.post('/', createArticleValidationRules, async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw createError(400, 'Validation error', { errors: errors.array() });
    }

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
    if (!article) {
        throw createError(404, 'Article not found');
    }
    res.json(article);
});

router.put('/:id', createArticleValidationRules, async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw createError(400, 'Validation error', { errors: errors.array() });
    }

    const { id } = req.params;
    const { title, content, description, category, imageURL } = req.body;
    const updatedArticle = await articleService.updateArticle(id, title, content, description, category, imageURL);
    if (!updatedArticle) {
        throw createError(404, 'Article not found');
    }
    res.json(updatedArticle);
});

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    await articleService.deleteArticle(id);
    res.json({ message: 'Article deleted successfully.' });
});

export default router;
