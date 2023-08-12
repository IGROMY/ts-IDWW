import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import createError from 'http-errors';
import 'express-async-errors';

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.APP_PORT || 3000;

import authRouter from './auth/auth.controller';
import userRouter from './user/user.controller';
import articleRouter from './article/article.controller';
import employeeRouter from './employee/employee.controller';
import workInfoRouter from './workInfo/workInfo.controller';
import newsRouter from './news/news.controller';

app.use(express.json());
app.use(cors());
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/article', articleRouter);
app.use('/work-info', workInfoRouter);
app.use('/employee', employeeRouter);
app.use('/news', newsRouter);
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    if (err.status && err.message) {
        return res.status(err.status).json({ error: err.message });
    }

    return res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
