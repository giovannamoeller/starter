class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listElement = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault(); // não deixa o funcionamento comum como recarregar a página

        this.repositories.push({
            name: 'starter',
            description: 'mto top',
            avatar_url: 'https://avatars2.githubusercontent.com/u/47362960?v=4',
            html_url: 'https://github.com/giovannamoeller/starter'
        });

        this.render();

        console.log(this.repositories);
    }

    render() {
        this.listElement.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let urlEl = document.createElement('a');
            urlEl.setAttribute('href', repo.url);
            urlEl.setAttribute('target', '_blank');
            urlEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(urlEl);
            this.listElement.appendChild(listItemEl);
        });
    }
}

new App();