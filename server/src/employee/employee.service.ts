import { PrismaClient, Employee } from '@prisma/client';
import createError from 'http-errors';

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
        return prisma.employee.findMany();
    }

    async getEmployee(id: string): Promise<Employee | null> {
        const employee = await prisma.employee.findUnique({ where: { id } });
        if (!employee) {
            throw createError(404, 'Employee not found');
        }
        return employee;
    }

    async updateEmployee(id: string, fullName: string, job: string, location: string, phoneNumber: string, email: string): Promise<Employee | null> {
        const updatedEmployee = await prisma.employee.update({
            where: { id },
            data: { fullName, job, location, phoneNumber, email },
        });
        if (!updatedEmployee) {
            throw createError(404, 'Employee not found');
        }
        return updatedEmployee;
    }

    async deleteEmployee(id: string): Promise<Employee | null> {
        const deletedEmployee = await prisma.employee.delete({ where: { id } });
        if (!deletedEmployee) {
            throw createError(404, 'Employee not found');
        }
        return deletedEmployee;
    }
}
