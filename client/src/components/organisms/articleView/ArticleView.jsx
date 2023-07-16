import React from 'react';
import styles from './ArticleView.module.scss'
import Text from "../../atoms/text/Text.jsx";
import Typography from "../../atoms/typography/Typography.jsx";
import useArticleStore from "../../../store/useArticleStore.ts";
import Button from "../../atoms/button/Button.jsx";
import Input from "../../atoms/input/Input.jsx";
import TextArea from "../../atoms/textArea/TextArea.jsx";
const ArticleView = () => {
    const {articles,addArticle, title, content, setTitle, setContent, deleteArticle } = useArticleStore()
        const handleAddArticle = () => {
        const newArticle = {title, content}
        addArticle(newArticle);
        setTitle('');
        setContent('');
    }
    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleContentChange = (event) => {
        setContent(event.target.value)
    }
    console.log(title)

    return (
        <div className={styles.container}>
            <Typography variant='h1'>
                CreateArticle
            </Typography>
            <Input
                label='Title'
                type='text'
                name='title'
                onChange={handleTitleChange}
                value={title}
            />
            <TextArea
                label='Content'
                type='text'
                name='content'
                onChange={handleContentChange}
                value={content}
            />
            { articles.length > 0 && articles.map((article, index) => (
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