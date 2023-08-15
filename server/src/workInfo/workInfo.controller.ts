import express, { Request, Response } from 'express';
import { WorkInfoService } from './workInfo.service';

const workInfoService = new WorkInfoService();
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const { heading, text, stepNumber } = req.body;

        if (!heading || !text || !stepNumber) {
            return res.status(400).json({ message: "Invalid request body. 'heading', 'text', and 'stepNumber' are required." });
        }

        const newWorkStepInfo = await workInfoService.createWorkInfo(heading, text, stepNumber);
        res.json(newWorkStepInfo);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating work info.' });
    }
});

router.get('', async (_req: Request, res: Response) => {
    try {
        const workStepInfos = await workInfoService.getAllWorkInfos();
        res.json(workStepInfos);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while retrieving work infos.' });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const workStepInfo = await workInfoService.getWorkInfo(req.params.id);

        if (!workStepInfo) {
            return res.status(404).json({ message: 'Work info not found.' });
        }

        res.json(workStepInfo);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while retrieving work info.' });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { heading, text, stepNumber } = req.body;

        if (!heading || !text || !stepNumber) {
            return res.status(400).json({ message: "Invalid request body. 'heading', 'text', and 'stepNumber' are required." });
        }

        const updatedWorkStepInfo = await workInfoService.updateWorkInfo(req.params.id, heading, text, stepNumber);

        if (!updatedWorkStepInfo) {
            return res.status(404).json({ message: 'Work info not found.' });
        }

        res.json(updatedWorkStepInfo);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while updating work info.' });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deletedWorkStepInfo = await workInfoService.deleteWorkInfo(req.params.id);

        if (!deletedWorkStepInfo) {
            return res.status(404).json({ message: 'Work info not found.' });
        }

        res.json(deletedWorkStepInfo);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting work info.' });
    }
});

export default router;
