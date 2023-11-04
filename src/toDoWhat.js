export default class ToDoWhat {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    // check if project alr exists
    if (this.projects.includes(project)) return;
    this.projects.push(project);
  }

  getProejct(projectName) {
    this.projects.find((project) => project.name === projectName);
  }

  getProjects() {
    return this.projects;
  }

  removeProject(projectName) {
    // find the project in the array, if name matches, remove it
    const returnedProject = this.projects.find(
      (project) => project.name === projectName
    );
    this.projects.splice(this.projects.indexOf(returnedProject), 1);
  }
}
