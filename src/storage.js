import ToDoWhat from "./toDoWhat";
export default class Storage {
  static saveData(data) {
    localStorage.setItem("todoWhat", JSON.stringify(data));
  }
  static getData() {
    return Object.assign(
      new ToDoWhat(),
      JSON.parse(localStorage.getItem("todoWhat"))
    );
  }
  static addProject(project) {
    let todoWhat = Object.assign(new ToDoWhat(), Storage.getData());
    if (!Storage.getData()) {
      todoWhat = Object.assign(new ToDoWhat(), Storage.getData());
    }
    todoWhat.addProject(project);
    Storage.saveData(todoWhat);
  }

  static removeProject(project) {
    let todoWhat = Object.assign(new ToDoWhat(), Storage.getData());
    todoWhat.removeProject(project);
    Storage.saveData(todoWhat);
  }
  static addTask(projectName, task) {
    let todoWhat = Object.assign(new ToDoWhat(), Storage.getData());
    todoWhat.getProject(projectName).addTask(task);
    Storage.saveData(todoWhat);
  }
  static removeTask(projectName, task) {
    let todoWhat = Object.assign(new ToDoWhat(), Storage.getData());
    todoWhat.getProject(projectName).removeTask(task);
    Storage.saveData(todoWhat);
  }
}
