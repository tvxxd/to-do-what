import toDoWhat from "./toDoWhat.js";
export default class Storage {
  static saveData(data) {
    localStorage.setItem("todoWhat", JSON.stringify(data));
  }
  static getData() {
    return Object.assign(
      new toDoWhat(),
      JSON.parse(localStorage.getItem("todoWhat"))
    );
  }
  static addProject(project) {
    let todoWhat = new toDoWhat();
    if (!Storage.getData()) {
      todoWhat = Object.assign(new toDoWhat(), Storage.getData());
    }
    todoWhat.addProject(project);
    Storage.saveData(todoWhat);
  }

  static removeProject(project) {
    let todoWhat = Object.assign(new toDoWhat(), Storage.getData());
    todoWhat.removeProject(project);
    Storage.saveData(todoWhat);
  }
  static addTask(projectName, task) {
    let todoWhat = Object.assign(new toDoWhat(), Storage.getData());
    todoWhat.getProject(projectName).addTask(task);
    Storage.saveData(todoWhat);
  }
  static removeTask(projectName, task) {
    let todoWhat = Object.assign(new toDoWhat(), Storage.getData());
    todoWhat.getProject(projectName).removeTask(task);
    Storage.saveData(todoWhat);
  }
}
