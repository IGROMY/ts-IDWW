import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { EmployeeService } from './employee.service';
import createError from 'http-errors';

const employeeService = new EmployeeService();
const router = express.Router();

const createEmployeeValidationRules = [
    body('fullName').notEmpty().withMessage('Full name is required'),
    body('job').notEmpty().withMessage('Job is required'),
    body('location').notEmpty().withMessage('Location is required'),
    body('phoneNumber').notEmpty().withMessage('Phone number is required'),
    body('email').notEmpty().withMessage('Email is required'),
];

router.post('/employee', createEmployeeValidationRules, async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw createError(400, 'Validation error', { errors: errors.array() });
    }

    const { fullName, job, location, phoneNumber, email } = req.body;
    const newEmployee = await employeeService.createEmployee(fullName, job, location, phoneNumber, email);
    res.json(newEmployee);
});

router.get('/employee', async (_req: Request, res: Response) => {
    const employees = await employeeService.getAllEmployees();
    res.json(employees);
});

router.get('/employee/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const employee = await employeeService.getEmployee(id);
    if (!employee) {
        throw createError(404, 'Employee not found');
    }
    res.json(employee);
});

// Handle update employee request
router.put('/employee/:id', createEmployeeValidationRules, async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw createError(400, 'Validation error', { errors: errors.array() });
    }

    const { id } = req.params;
    const { fullName, job, location, phoneNumber, email } = req.body;
    const updatedEmployee = await employeeService.updateEmployee(id, fullName, job, location, phoneNumber, email);
    if (!updatedEmployee) {
        throw createError(404, 'Employee not found');
    }
    res.json(updatedEmployee);
});

router.delete('/employee/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedEmployee = await employeeService.deleteEmployee(id);
    if (!deletedEmployee) {
        throw createError(404, 'Employee not found');
    }
    res.json(deletedEmployee);
});

export default router;
