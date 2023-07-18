import { PrismaClient, User } from '@prisma/client';
import createError from 'http-errors';

const prisma = new PrismaClient();

export class UserService {
    async getUser(userId: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw createError(404, 'User not found');
        }

        return user;
    }
}
