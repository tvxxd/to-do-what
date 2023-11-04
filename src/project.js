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

const newtsk = new Project("testtaskk");

console.log(newtsk);
// newtsk.addTask("blbl");s
// newtsk.removeTask("blbl");
console.log(newtsk.getTasks());
