import { FC } from 'react';
import styles from './ArticleView.module.scss';
import Text from "../../atoms/text/Text.tsx";
import Typography from "../../atoms/typography/Typography.tsx";
import useArticleStore from "../../../store/useArticleStore.ts";
import Button from "../../atoms/button/Button.tsx";
import Input from "../../atoms/input/Input.tsx";
import TextArea from "../../atoms/textArea/TextArea.tsx";

const ArticleView: FC = () => {
    const { articles, addArticle, title, content, setTitle, setContent, deleteArticle } = useArticleStore();

    const handleAddArticle = () => {
        const newArticle = { title, content };
        addArticle(newArticle);
        setTitle('');
        setContent('');
    };

    return (
        <div className={styles.container}>
            <Typography variant='h1'>
                CreateArticle
            </Typography>
            <Input
                label='Title'
                type='text'
                name='title'
                onChange={({ target: { value } }) => setTitle(value)}
                value={title}
            />
            <TextArea
                label='Content'
                type='text'
                name='content'
                onChange={({ target: { value } }) => setContent(value)}
                value={content}
            />
            {articles.length > 0 && articles.map((article, index) => (
                <div key={index}>
                    <Text variant='bold'>
                        {article.title}
                    </Text>
                    <Text variant='normal'>
                        {article.content}
                    </Text>
                    <Button
                        variant='primary'
                        onClick={() => deleteArticle(index)}
                        text='Delete'
                        type='button'
                    />
                </div>
            ))}
            <Button
                variant='secondary'
                onClick={handleAddArticle}
                text='Add Article'
                type='button'
            />
        </div>
    );
};

export default ArticleView;
