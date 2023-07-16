import { PrismaClient, WorkInfo } from '@prisma/client';

const prisma = new PrismaClient();

export class WorkInfoService {
    async createWorkInfo(heading: string, text: string, stepNumber: string): Promise<WorkInfo> {
        return await prisma.workInfo.create({
            data: {
                heading,
                text,
                stepNumber
            },
        });
    }

    async getAllWorkInfos(): Promise<WorkInfo[]> {
        return await prisma.workInfo.findMany();
    }

    async getWorkInfo(id: string): Promise<WorkInfo | null> {
        return await prisma.workInfo.findUnique({
            where: { id },
        });
    }

    async updateWorkInfo(id: string, heading: string, text: string, stepNumber: string): Promise<WorkInfo> {
        return await prisma.workInfo.update({
            where: { id },
            data: {
                heading,
                text,
                stepNumber
            },
        });
    }

    async deleteWorkInfo(id: string): Promise<WorkInfo> {
        return await prisma.workInfo.delete({
            where: { id },
        });
    }
}
