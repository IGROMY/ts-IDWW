import express, { Request, Response } from 'express';
import { param, validationResult, body } from 'express-validator';
import { UserService } from './user.service';
import createError from 'http-errors';

const userService = new UserService();
const router = express.Router();

const getUserValidationRules = [
    param('userId').notEmpty().withMessage('User ID is required'),
];

router.get('/:userId', getUserValidationRules, async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw createError(400, 'Validation error', { errors: errors.array() });
    }

    const { userId } = req.params;
    const user = await userService.getUser(userId);

    if (!user) {
        throw createError(404, 'User not found');
    }

    res.json(user);
});

export default router;
