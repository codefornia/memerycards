class Cell {
  constructor(state, value) {
    this.state = state;
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(v) {
  }
  
  addView(view) {
    this.view = view;

    view.addEventListener('mousedown', (e) => {
        if (e.button === 0) {
          if (this.state === 'closed') {
            if (this.isBomb()) {
              this.state = 'open';
              this.view.className = 'cell-bomb';
            } else {
              this.openCell();
            }
          }
        }
      }
    )
  }

  openCell() {
    this.state = 'open';
    this.view.className = 'cell-open';
  }
}
