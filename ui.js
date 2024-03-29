class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    //Display profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary mb-2">Public Repos:${user.public_repos}</span>
                        <span class="badge badge-secondary mb-2">Public Gists:${user.public_gists}</span>
                        <span class="badge badge-success mb-2">Public Followers:${user.followers}</span>
                        <span class="badge badge-info mb-2">Public Repos:${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company:${user.company}</li>
                            <li class="list-group-item">Website/Blog:${user.blog}</li>
                            <li class="list-group-item">Location:${user.location}</li>
                            <li class="list-group-item">Menber Since:${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class=""page-heading mb-3>Latest Repos</h3>
            <div id="repos"></div>
        
        `;
    }

    //Show user repos
    showRepos(repos) {
        let outPut = '';

        repos.forEach(function(repo) {
            outPut += `
                <div calss="card card-body mb-2">
                    <div calss="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary mb-2">Stars:${repos.stargazers_count}</span>
                            <span class="badge badge-secondary mb-2">Watcher:${repos.watchers_count}</span>
                            <span class="badge badge-success mb-2">Forks:${repos.forks_count}</span>
                        </div>
                    </div>
                </div>
            
            
            `;
        });

        //Output repos
        document.getElementById('repos').innerHTML = outPut;
    }

    //Clear forfile
    clearProfile() {
        this.profile.innerHTML = '';
    }

    //Show alert message
    showAlert(message,className) {
        //Clear existing alert
        this.clearAlert();
        //create div
        const div = document.createElement('div');
        //Add class name
        div.className = className;
        //Add text 
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector('.searchContainer');
        //Get searchbox
        const search = document.querySelector('.search');
        //Insert alert
        container.insertBefore(div,search);
        //Timout after 3 sec
        setTimeout(() => {
            this.clearAlert();
        },3000);
    }

    //Clear allert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }
}