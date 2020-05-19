function createArticle() {
    let titleArticle = document.getElementById('createTitle');
    let contentArticle = document.getElementById('createContent');
    let articlesCollection = document.getElementById('articles');


    let newArticle = document.createElement('article');
    let newTitle = document.createElement('h3');
    let newP = document.createElement('p');
    if (titleArticle.value.length > 0 && contentArticle.value.length > 0) {
        newTitle.textContent = titleArticle.value;
        newP.textContent = contentArticle.value;

        newArticle.appendChild(newTitle);
        newArticle.appendChild(newP);

        articlesCollection.appendChild(newArticle);

        titleArticle.value = '';
        contentArticle.value = '';
    }
}