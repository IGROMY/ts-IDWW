export interface IArticle {
    id: number,
    title: string,
    content: string,
    description: string,
    category: 'Home design' | "Interior Design" | 'Kitchen Design',
    imageURL: string
}
