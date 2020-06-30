function solve() {
    let buttonCreate = document.getElementsByClassName('create')[0];

    buttonCreate.addEventListener('click', createArticle)

    let mainButtons = document.getElementsByTagName('main')[0];
    mainButtons.addEventListener('click', delOrAchive);

    function delOrAchive(e) {
        if (e.target.textContent === 'Delete') {
            e.target.parentElement.parentElement.remove();
        } else if (e.target.textContent === 'Archive') {

            let titleArticle = e.target.parentElement.parentElement.children[0].textContent;
            let titleLI = document.createElement('li');
            titleLI.innerHTML = titleArticle;

            let currentUL = document.getElementsByClassName('archive-section')[0].children[1];
            currentUL.appendChild(titleLI);

            let sorted = Array.from(currentUL.getElementsByTagName('li')).sort((a, b) => (a.innerHTML).localeCompare(b.innerHTML));

            while (currentUL.firstChild) {
                currentUL.removeChild(currentUL.firstChild);
            }

            for (const li of sorted) {
                currentUL.appendChild(li);
            }
            e.target.parentElement.parentElement.remove();
        }
    }

    function createArticle(e) {
        e.preventDefault();
        let author = document.getElementById('creator');
        let title = document.getElementById('title');
        let category = document.getElementById('category');
        let content = document.getElementById('content');

        if (author.value.length > 0 &&
            title.value.length > 0 &&
            category.value.length > 0 &&
            content.value.length > 0
        ) {
            generateArticleStructure(author, title, category, content);
        }
    }



    function generateArticleStructure(author, title, category, content) {
        let newArticle = document.createElement('article');
        let newTitle = document.createElement('h1');
        newTitle.textContent = title.value;
        newArticle.appendChild(newTitle);

        let newPcategory = document.createElement('p');
        newPcategory.textContent = 'Category:';
        let newStrongCategory = document.createElement('strong');
        newStrongCategory.textContent = category.value;
        newPcategory.appendChild(newStrongCategory);
        newArticle.appendChild(newPcategory);

        let newPauthor = document.createElement('p');
        newPauthor.textContent = 'Creator:';
        let newStrongAuthor = document.createElement('strong');
        newStrongAuthor.textContent = author.value;
        newPauthor.appendChild(newStrongAuthor);
        newArticle.appendChild(newPauthor);

        let newPcontent = document.createElement('p');
        newPcontent.textContent = content.value;
        newArticle.appendChild(newPcontent);

        let newButtonsDiv = document.createElement('div');
        newButtonsDiv.classList.add('buttons');
        let newDelButton = document.createElement('button');
        newDelButton.classList.add('btn', 'delete');
        newDelButton.innerHTML = 'Delete';

        let newArchiveButton = document.createElement('button');
        newArchiveButton.classList.add('btn', 'archive');
        newArchiveButton.innerHTML = 'Archive';

        newButtonsDiv.appendChild(newDelButton);
        newButtonsDiv.appendChild(newArchiveButton);
        newArticle.appendChild(newButtonsDiv);
        document.getElementsByTagName('main')[0].children[0].appendChild(newArticle);
    }
}