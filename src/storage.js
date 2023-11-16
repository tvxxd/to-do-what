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
    let todoWhat = Storage.getData();
    todoWhat.addProject(project);
    Storage.saveData(todoWhat);
  }

  static removeProject(project) {
    let todoWhat = Storage.getData();
    todoWhat.removeProject(project);
    Storage.saveData(todoWhat);
  }
  static addTask(projectName, task) {
    let todoWhat = Storage.getData();
    todoWhat.getProject(projectName).addTask(task);
    Storage.saveData(todoWhat);
  }
  static removeTask(projectName, task) {
    let todoWhat = Storage.getData();
    todoWhat.getProject(projectName).removeTask(task);
    Storage.saveData(todoWhat);
  }

  static setTaskDate(projectName, taskName, newDate) {
    let todoWhat = Storage.getData();
    todoWhat.getProject(projectName).setTaskDate(taskName, newDate);
    Storage.saveData(todoWhat);
  }
}
