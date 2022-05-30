function startGame() {
  const cfg = new Config(3, 4);
  let board = new Board(cfg);
  board.generate();
  //let boardView = new BoardView(board, cfg);
  //boardView.draw();
}
