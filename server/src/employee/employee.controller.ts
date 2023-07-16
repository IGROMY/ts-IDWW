import express, { Request, Response } from 'express';
import { EmployeeService } from './employee.service';

const employeeService = new EmployeeService();
const router = express.Router();

router.post('/employee', async (req: Request, res: Response) => {
    try {
        const { fullName, job, location, phoneNumber, email } = req.body;

        if (!fullName || !job || !location || !phoneNumber || !email) {
            return res.status(400).json({ message: "Invalid request body. All fields are required." });
        }

        const newEmployee = await employeeService.createEmployee(fullName, job, location, phoneNumber, email);
        res.json(newEmployee);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating employee.' });
    }
});

router.get('/employee', async (_req: Request, res: Response) => {
    try {
        const employees = await employeeService.getAllEmployees();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while retrieving employees.' });
    }
});

router.get('/employee/:id', async (req: Request, res: Response) => {
    try {
        const employee = await employeeService.getEmployee(req.params.id);

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found.' });
        }

        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while retrieving employee.' });
    }
});

router.put('/employee/:id', async (req: Request, res: Response) => {
    try {
        const { fullName, job, location, phoneNumber, email } = req.body;

        if (!fullName || !job || !location || !phoneNumber || !email) {
            return res.status(400).json({ message: "Invalid request body. All fields are required." });
        }

        const updatedEmployee = await employeeService.updateEmployee(req.params.id, fullName, job, location, phoneNumber, email);

        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found.' });
        }

        res.json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while updating employee.' });
    }
});

router.delete('/employee/:id', async (req: Request, res: Response) => {
    try {
        const deletedEmployee = await employeeService.deleteEmployee(req.params.id);

        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found.' });
        }

        res.json(deletedEmployee);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting employee.' });
    }
});

export default router;
