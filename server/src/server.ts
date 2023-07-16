import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.APP_PORT || 3000;
import authRouter from './auth/auth.controller';
import userRouter from './user/user.controller';
import articleRouter from './article/article.controller';
import employeeRouter from './employee/employee.controller';
import workInfoRouter from './workInfo/workInfo.controller';

app.use(express.json());
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/article', articleRouter);
app.use('/work-info', workInfoRouter);
app.use('/employee', employeeRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
