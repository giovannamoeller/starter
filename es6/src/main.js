import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input');
        this.listElement = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if(loading) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');
            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        this.repositories = [];
        event.preventDefault(); // não deixa o funcionamento comum como recarregar a página
        let inputValue = this.inputEl.value;
        if(inputValue.length == 0) {
            return; // função para de executar
        }
        this.setLoading();
        try {
            const response = await api.get(`/repos/${inputValue}`);
            const { name, description, clone_url, owner : { avatar_url } } = response.data;
            this.repositories.push({
                name,
                description: description || 'Sem descrição disponível',
                avatar_url,
                clone_url
            });

            this.inputEl.value = '';
            this.render();

        } catch(err) {
            alert('O repositório não existe');
        }
        this.setLoading(false);
    }

    render() {
        this.listElement.innerHTML = '';
        console.log(this.repositories)
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let urlEl = document.createElement('a');
            urlEl.setAttribute('href', repo.html_url);
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