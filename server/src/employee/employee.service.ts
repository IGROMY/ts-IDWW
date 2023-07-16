import { PrismaClient, Employee } from '@prisma/client';

const prisma = new PrismaClient();

export class EmployeeService {
    async createEmployee(fullName: string, job: string, location: string, phoneNumber: string, email: string): Promise<Employee> {
        const newEmployee = await prisma.employee.create({
            data: {
                fullName,
                job,
                location,
                phoneNumber,
                email
            },
        });

        return newEmployee;
    }

    async getAllEmployees(): Promise<Employee[]> {
        return await prisma.employee.findMany();
    }

    async getEmployee(id: string): Promise<Employee | null> {
        return await prisma.employee.findUnique({ where: { id } });
    }

    async updateEmployee(id: string, fullName: string, job: string, location: string, phoneNumber: string, email: string): Promise<Employee> {
        return await prisma.employee.update({
            where: { id },
            data: { fullName, job, location, phoneNumber, email },
        });
    }

    async deleteEmployee(id: string): Promise<Employee> {
        return await prisma.employee.delete({ where: { id } });
    }
}
