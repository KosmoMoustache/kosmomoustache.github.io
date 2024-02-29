export default class Game {
  selectedStr = [];
  currentStr = '';

  scores = {
    currentStrike: 0,
    bestStrike: 0,
    totalStrikes: 0,
    failed: 0,
  };

  constructor() {}

  addStr(str) {
    this.selectedStr.push(str);
    this.currentStr += str;
  }

  resetStr() {
    this.selectedStr = [];
    this.currentStr = '';
  }
  removeStr() {
    this.selectedStr.pop();
    this.currentStr = this.selectedStr.join('');
  }
}
