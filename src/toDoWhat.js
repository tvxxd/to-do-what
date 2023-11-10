import Project from "./project";

export default class ToDoWhat {
  constructor() {
    this.projects = [];
    this.projects.push('myProject')
  }

  addProject(project) {
    if (!project) return;
    // check if project alr exists
    if (this.projects.includes(project)) return;
    this.projects.push(project);
    return true;
  }

  getProject(projectName) {
    return Object.assign(
      new Project(),
      this.projects.find((project) => project.name === projectName)
    );
  }

  has(projectName) {
    return this.projects.some((project) => project.name === projectName);
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
