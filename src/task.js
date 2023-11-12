export default class Task {
  constructor(name, details, date = "Date not Specified") {
    this.name = name;
    this.details = details;
    this.date = date;
  }

  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setDetails(details) {
    this.details = details;
  }
  getDetails() {
    return this.details;
  }
  setDate(date) {
    this.date = date;
  }
  getDate() {
    return this.date;
  }
}
