import express, { Request, Response } from 'express';
import { validationResult, body } from 'express-validator';
import { NewsService } from './news.service';

const newsService = new NewsService();
const router = express.Router();

const createNewsValidationRules = [
    body('title').notEmpty().withMessage('Title is required').isLength({ min: 2 }).withMessage('Title must have at least 2 characters'),
    body('description').notEmpty().withMessage('Description is required').isLength({ min: 2 }).withMessage('Description must have at least 2 characters'),
    body('category').notEmpty().withMessage('Category is required'),
    body('imageUrl').optional().isURL().withMessage('Valid Image URL is required'),
];

router.post('/', createNewsValidationRules, async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: 'Validation errors occurred', errors: errors.array() });
        }

        const { title, description, date, category, imageUrl } = req.body;
        const newNews = await newsService.createNews(title, description, new Date(date), category, imageUrl);
        res.json(newNews);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating the news.', error: error.message });
    }
});

router.get('/', async (_req: Request, res: Response) => {
    try {
        const newsItems = await newsService.getNews();
        res.json(newsItems);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching the news.', error: error.message });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const newsItem = await newsService.getNewsById(Number(id));
        res.json(newsItem);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching the news item.', error: error.message });
    }
});

router.put('/:id', createNewsValidationRules, async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: 'Validation errors occurred', errors: errors.array() });
        }

        const { id } = req.params;
        const { title, description, date, category, imageUrl } = req.body;
        const updatedNews = await newsService.updateNews(Number(id), title, description, new Date(date), category, imageUrl);
        res.json(updatedNews);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while updating the news item.', error: error.message });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await newsService.deleteNews(Number(id));
        res.json({ message: 'News item deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting the news item.', error: error.message });
    }
});

export default router;
