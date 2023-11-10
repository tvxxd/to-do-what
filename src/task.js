export default class Task {
  constructor(name, date = "Date not Specified", details) {
    this.name = name;
    this.date = date;
    this.details = details;
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
    return this.getDetails;
  }
  setDate(date) {
    this.date = date;
  }
  getDate() {
    return this.date;
  }
}
