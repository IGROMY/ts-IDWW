import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export class UserService {
    async getUser(userId: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        return user;
    }
}
