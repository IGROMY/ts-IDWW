import express, { Request, Response } from 'express';
import { UserService } from './user.service';

const userService = new UserService();
const router = express.Router();

router.get('/:userId', async (req: Request, res: Response) => {
    const { userId } = req.params;
    const user = await userService.getUser(userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    res.json(user);
});

export default router;
