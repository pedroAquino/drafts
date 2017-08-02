let input = document.querySelector('#filtroProjetos'),
    projetosDiv = document.querySelector('#projetos'),
    apiUrl = 'https://api.github.com/search/repositories?q='
    observable = Rx.Observable.fromEvent(input, 'keyup'),
    projectsSubject = new Rx.BehaviorSubject([]);
    
observable
    .debounce(() => Rx.Observable.interval(500))
    .map(event => event.target.value)
    .filter(text => text.length > 2)
    .subscribe(
        value => searchProjects(value)
    );

function searchProjects(projectName) {
    Rx.Observable.fromPromise(
        fetch(`${apiUrl}${projectName}`)
    )
    .subscribe(response => {
        response
            .json()
            .then(result => result.items)
            .then(items => projectsSubject.next(items));
    })
}

projectsSubject.subscribe(
    projects => {
      let template = '';
      projects.forEach(project => {
          template += `
			<li class="project-list-item" >
				<img class="project-owner-avatar" src="${project.owner.avatar_url}" />
				<div class="project-info" >
					<b>${project.owner.login}</b>
					/ ${project.name}
				</div>
				<div class="project-info" >
					Forks: ${project.forks}
				</div>
			</li>
          `
      })
      
      projetosDiv.innerHTML = template;
    }
);
