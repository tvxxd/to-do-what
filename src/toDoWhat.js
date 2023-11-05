export default class ToDoWhat {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    if (!project) return;
    // check if project alr exists
    if (this.projects.includes(project)) return;
    this.projects.push(project);
    return true;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.name === projectName);
  }

  getProjects() {
    return this.projects;
  }

  removeProject(projectName) {
    if (!projectName) return;
    // find the project in the array, if name matches, remove it
    const returnedProject = this.projects.find(
      (project) => project.name === projectName
    );
    const index = this.projects.indexOf(returnedProject);
    this.projects.splice(index, 1);
  }
}
