import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient, User } from '@prisma/client';
import { randomBytes } from 'crypto';

const prisma = new PrismaClient();

export class AuthService {
    async register(email: string, password: string, role: string, photo: string): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                role,
                photo
            },
        });

        return newUser;
    }

    async login(email: string, password: string): Promise<string | null> {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !await bcrypt.compare(password, user.password)) {
            return null;
        }

        const accessToken = this.createAccessToken(user.id);
        const refreshToken = this.createRefreshToken(user.id);

        await prisma.user.update({
            where: { id: user.id },
            data: { refreshToken },
        });

        return accessToken;
    }

    createAccessToken(userId: string): string {
        return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '15m', algorithm: 'HS256' });
    }

    createRefreshToken(userId: string): string {
        const refreshToken = randomBytes(24).toString('hex');

        return refreshToken;
    }
    async getRefreshToken(userId: string): Promise<string | null> {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        return user?.refreshToken || null;
    }
    async logout(userId: string): Promise<void> {
        // Delete user's refresh token
        await prisma.user.update({
            where: { id: userId },
            data: { refreshToken: null },
        });
    }
}
