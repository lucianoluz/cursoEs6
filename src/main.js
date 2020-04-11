import api from './api'

class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById("repo-form");
        this.inputEl = document.querySelector('input[name=repository')
        this.listEl = document.getElementById("repo-list");
        this.registerHandlers();
        this.render();
    }
    registerHandlers(){
        this.formEl.onsubmit = (event)=> this.addRepository(event);
    }

    setLoading(loading=true){
        if (loading===true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode("loading"));
            loadingEl.setAttribute('id','loading');

            this.formEl.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();
        }

    }
    async addRepository(event){
        event.preventDefault();
        
        
        const repoInput = this.inputEl.value;
        if(repoInput===0){
            this.inputEl.value = "";
            return;
        }
        this.setLoading();
        try{
            const response = await api.get(`/repos/${repoInput}`);
        
            console.log(response);
            const { name, full_name, html_url, owner: { avatar_url} } = response.data;
            this.repositories.push({
                name,
                description: full_name,
                avatar_url,
                html_url,

                //without destructuring
                //name:response.data.name,
                //description:response.data.full_name,
                //avatar_url:response.data.owner.avatar_url,
                //html_url:response.data.html_url,
            });
            
            this.render()
            this.inputEl.value = "";
        }catch(err){
            alert("Invalid repository name");
        }
        this.setLoading(false);
    }

    render(){
        this.listEl.innerHTML="";

        this.repositories.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', "_blank");
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Access'));

            let listItem = document.createElement('li');
            listItem.appendChild(imgEl);
            listItem.appendChild(titleEl);
            listItem.appendChild(descriptionEl);
            listItem.appendChild(linkEl);

            this.listEl.appendChild(listItem);


        })
    }
}

new App();