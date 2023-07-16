import {Article, PrismaClient} from '@prisma/client';
import {Category} from "article/article.enum";

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
        return prisma.article.findUnique({ where: { id } });
    }

    async updateArticle(id: string, title: string, content: string, description: string, category: Category, imageURL: string): Promise<Article> {
        return prisma.article.update({
            where: { id },
            data: {
                title,
                content,
                description,
                category,
                imageURL
            },
        });
    }

    async deleteArticle(id: string): Promise<void> {
        await prisma.article.delete({ where: { id } });
    }
}
