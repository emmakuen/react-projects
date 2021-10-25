import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: Math.random()
  }


  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
    this.flipCellsAround = this.flipCellsAround.bind(this)
  }

  // /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    for (let i=0; i<5; i++) {
      let row = []
      for (let j=0; j<5; j++) {
        let randomCondition = Math.floor(Math.random() * 2)
        if(randomCondition) {
          row.push(true)
        } else {
          row.push(false)
        }
      }
      board.push(row)
    }
    return board
  }


  // /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [x, y] = coord.split("-").map(Number);
    function flipCell(x, y) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[x][y] = !board[x][y];
      }
    }
    // TODO: flip this cell and the cells around it
    
    for (let i=x-1; i<x+2; i++) {
      flipCell(i, y)
      console.log(i, y)
      for (let j=y-1; j<y+2; j++) {
        if (y !== j) flipCell(x, j)
      }
    }
    
    this.setState({
      board: board
    })

    const checker = table => table.every(row => row.every(cell => cell === true))
    
    if (checker(board)) {
      this.setState({hasWon: true})
    }
  }


  // /** Render game board or winning message. */

  render() {
    return (
      // if the game is won, just show a winning msg & render nothing else
      <div className="Board">
        <h1 className="title">
          <span class="neon">{this.state.hasWon ? "You" : "Lights" }</span>
          <span class="flux">{this.state.hasWon ? " Win!" : " Out" }</span>
        </h1>
        <table className="cell-container">
          <tbody>
            {!this.state.hasWon && this.state.board.map((row, xIdx) => 
              <tr key={xIdx}>
                {row.map((cell, yIdx) =>
                  <Cell 
                    isLit={cell ? "Cell-lit" : ""} 
                    key={`${xIdx}-${yIdx}`} 
                    id={`${xIdx}-${yIdx}`}
                    flipCellsAroundMe={this.flipCellsAround}
                  />
                )}
              </tr>
            )}
          </tbody>  
        </table>
      </div>

    )
  }
}


export default Board;
