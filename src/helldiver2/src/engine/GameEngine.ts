export default class GameEngine {
  selectedStr: Set<Stratagem> = new Set<Stratagem>();
  currentStr: Stratagem | null = null;

  scores = {
    currentStrike: 0,
    bestStrike: 0,
    totalStrikes: 0,
    failed: 0,
  };
  dispatch: any;

  constructor(
    dispatch: React.Dispatch<React.SetStateAction<Stratagem | null | undefined>>
  ) {
    this.dispatch = dispatch;
  }

  setSequence(str: Stratagem) {
    this.currentStr = str;
    this.dispatch(str);
  }

  addStr(str: Stratagem) {
    console.log('addStr', str);
    this.dispatch(str);
    this.selectedStr.add(str);
  }

  resetStr() {
    this.selectedStr.clear();
  }
  removeStr(str: Stratagem) {
    this.selectedStr.delete(str);
  }
}
