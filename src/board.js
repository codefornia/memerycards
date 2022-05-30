class Board {
  constructor(config) {
    this.config = config;
  }

  getMatrix() {
    return this.matrix;
  }

  generate() {
    this.initEmpty();
    this.fillWithCells();
    this.fillCards();
    console.log(this.matrix);
  }

  initEmpty() {
    this.matrix = new Array(this.config.height);
    for (let i = 0; i < this.matrix.length; i++) {
      this.matrix[i] = new Array(this.config.width);
    }
  }

  fillWithCells() {
    for (let i = 0; i < this.matrix.length; i++) {
      let row = this.matrix[i];
      for (let j = 0; j < row.length; j++) {
        row[j] = new Cell('closed', 0);
      }
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  fillCards() {
    let arr = [];
    const cardsCount = this.config.width * this.config.height / 2;
    for (let n = 1; n <= cardsCount; n++) {
      arr.push(n);
      arr.push(n);
    }
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        const rand = this.getRandomInt(arr.length);
          this.matrix[i][j] = arr[rand];
          arr.splice(rand, 1);
      }
    }
  }

  doesCellExist(rowIndex, colIndex) {
    return rowIndex >= 0 && rowIndex < this.config.height && colIndex >= 0 && colIndex < this.config.width;
  }
}
