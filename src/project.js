export default class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getTask(taskName) {
    return this.taskList.find((task) => task.name === taskName);
  }

  getTasks() {
    return this.taskList;
  }

  addTask(task) {
    return this.taskList.push(task);
  }

  removeTask(task) {
    return this.taskList.splice(this.taskList.indexOf(task));
  }
}
