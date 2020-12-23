import React from "react";
import calculateWinner from './calculateWinner';
import Square from './Square';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          console.log(calculateWinner(squares));
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
      }

      renderSquare(i) {
        return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
      }

    renderRestartButton() {
        return (
            <button 
                onClick={() => this.setState({
                    squares: Array(9).fill(null),
                    xIsNext: true,
                }
                )}
            >
                Restart game
            </button>
        );
    }

    render() {
        if (calculateWinner(this.state.squares)) {
            return (
                <div className="end-game-wrapper">
                    <div className="end-game-text">{this.state.xIsNext ? 'O wins' : 'X wins'}</div>
                    {this.renderRestartButton()}
                </div>
            );
        }
        if (!this.state.squares.includes(null)) {
            return (
                <div className="end-game-wrapper">
                    <div className="end-game-text">Draw</div>
                    {this.renderRestartButton()}
                </div>
            );
        }
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        return (
            <div>
              <div className="status">{status}</div>
              <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
        );
    }
}