export enum Category {
    diary = 'diary',
    devlog = 'devlog',
    review = 'review',
}

export interface Article{
    title: string,
    category: Category, 
    createAt: Date,
}