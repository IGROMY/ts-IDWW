import { PrismaClient, News } from '@prisma/client';
import createError from 'http-errors';

const prisma = new PrismaClient();

export class NewsService {
    async createNews(title: string, description: string, date: Date, category: string, imageUrl?: string): Promise<News> {
        const newNews = await prisma.news.create({
            data: {
                title,
                description,
                date,
                category,
                imageUrl
            },
        });

        return newNews;
    }

    async getNews(): Promise<News[]> {
        return prisma.news.findMany();
    }

    async getNewsById(id: number): Promise<News | null> {
        const news = await prisma.news.findUnique({ where: { id } });
        if (!news) {
            throw createError(404, 'News not found');
        }
        return news;
    }

    async updateNews(id: number, title: string, description: string, date: Date, category: string, imageUrl?: string): Promise<News | null> {
        const updatedNews = await prisma.news.update({
            where: { id },
            data: {
                title,
                description,
                date,
                category,
                imageUrl
            },
        });
        if (!updatedNews) {
            throw createError(404, 'News not found');
        }
        return updatedNews;
    }

    async deleteNews(id: number): Promise<void> {
        const deletedNews = await prisma.news.delete({ where: { id } });
        if (!deletedNews) {
            throw createError(404, 'News not found');
        }
    }
}
