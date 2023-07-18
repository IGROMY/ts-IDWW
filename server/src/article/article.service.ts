import { PrismaClient, Article } from '@prisma/client';
import { Category } from 'article/article.enum';
import createError from 'http-errors';

const prisma = new PrismaClient();

export class ArticleService {
    async createArticle(title: string, content: string, description: string, category: Category, imageURL: string): Promise<Article> {
        const newArticle = await prisma.article.create({
            data: {
                title,
                content,
                description,
                category,
                imageURL
            },
        });

        return newArticle;
    }

    async getArticles(): Promise<Article[]> {
        return prisma.article.findMany();
    }

    async getArticleById(id: string): Promise<Article | null> {
        const article = await prisma.article.findUnique({ where: { id } });
        if (!article) {
            throw createError(404, 'Article not found');
        }
        return article;
    }

    async updateArticle(id: string, title: string, content: string, description: string, category: Category, imageURL: string): Promise<Article | null> {
        const updatedArticle = await prisma.article.update({
            where: { id },
            data: {
                title,
                content,
                description,
                category,
                imageURL
            },
        });
        if (!updatedArticle) {
            throw createError(404, 'Article not found');
        }
        return updatedArticle;
    }

    async deleteArticle(id: string): Promise<void> {
        const deletedArticle = await prisma.article.delete({ where: { id } });
        if (!deletedArticle) {
            throw createError(404, 'Article not found');
        }
    }
}
