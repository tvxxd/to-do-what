import Task from "./task";

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
    return Object.assign(
      new Task(),
      this.taskList.find((task) => task.name === taskName)
    );
  }

  has(taskName) {
    return this.taskList.some((task) => task.name === taskName);
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
  setTaskDate(taskName, newDate) {
    this.taskList.find((task) => task.name === taskName).date = newDate;
  }
}
