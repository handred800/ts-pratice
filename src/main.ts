import { Article, Category } from './interface';

// 介面
const $form = <HTMLFormElement>document.querySelector('#articleForm');
const $category = <HTMLSelectElement>document.querySelector('#articleCategory');
const $title = <HTMLInputElement>document.querySelector('#articleTitle');

// 文章資料
const articles: Article[] = [];

function addArticle(article: Article) {
    articles.push(article);
}

// 表單監聽
$form.addEventListener('submit', (e) => {
    e.preventDefault();
    addArticle({
        title: $title.value,
        category: Category[$category.value],
        createAt: new Date(),
    })
    console.log(articles);
})