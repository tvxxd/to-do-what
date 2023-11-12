import Project from "./project";

export default class ToDoWhat {
  constructor() {
    this.projects = [];
  }

  addProject(newProject) {
    if (!newProject) return;
    if (this.projects.find((project) => project.name === newProject.name)) {
      return;
    }
    this.projects.push(newProject);
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
