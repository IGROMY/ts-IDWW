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
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: 'Validation errors occurred', errors: errors.array() });
        }

        const { title, content, description, category, imageURL } = req.body;
        const newArticle = await articleService.createArticle(title, content, description, category, imageURL);
        res.json(newArticle);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating the article.', error: error.message });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const article = await articleService.getArticleById(id);
        if (!article) {
            return res.status(404).json({ message: 'Article with the given ID not found.' });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching the article.', error: error.message });
    }
});

router.put('/:id', createArticleValidationRules, async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: 'Validation errors occurred', errors: errors.array() });
        }

        const { id } = req.params;
        const { title, content, description, category, imageURL } = req.body;
        const updatedArticle = await articleService.updateArticle(id, title, content, description, category, imageURL);
        if (!updatedArticle) {
            return res.status(404).json({ message: 'Article with the given ID not found.' });
        }
        res.json(updatedArticle);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while updating the article.', error: error.message });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const articleExists = await articleService.getArticleById(id);

        if (!articleExists) {
            return res.status(404).json({ message: 'Article with the given ID not found.' });
        }

        await articleService.deleteArticle(id);
        res.json({ message: 'Article deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting the article.', error: error.message });
    }
});

export default router;
