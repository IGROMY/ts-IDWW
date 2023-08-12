import express, { Request, Response } from 'express';
import { AuthService } from './auth.service';

const authService = new AuthService();
const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const role = "USER"
        const photo = "https://campussafetyconference.com/wp-content/uploads/2020/08/iStock-476085198.jpg"
        const newUser = await authService.register(email, password, role, photo);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ message: 'Error occurred during registration.', error: err.message });
    }
});

router.post('/login', async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const accessToken = await authService.login(email, password);

        if (!accessToken) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        res.json({ accessToken });
    } catch (err) {
        res.status(500).json({ message: 'Error occurred during login.', error: err.message });
    }
});

router.get('/refresh-token', async (req: Request, res: Response) => {
    try {
        const { userId } = req.body;
        const refreshToken = await authService.getRefreshToken(userId);

        if (!refreshToken) {
            return res.status(404).json({ message: 'Refresh token not found.' });
        }

        res.json({ refreshToken });
    } catch (err) {
        res.status(500).json({ message: 'Error occurred during refresh token retrieval.', error: err.message });
    }
});

router.post('/logout', async (req: Request, res: Response) => {
    try {
        const { userId } = req.body;
        await authService.logout(userId);
        res.json({ message: 'Successfully logged out.' });
    } catch (err) {
        res.status(500).json({ message: 'Error occurred during logout.', error: err.message });
    }
});

export default router;
