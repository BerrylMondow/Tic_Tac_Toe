import { useState } from "react";

function Button({ value, onSquareClick }) {
  return (
    <button className="button" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Box() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner (squares);
  let status = ''
  if (winner) {
    status = 'Winner: ' + winner
  }
  
  else if (squares.every((square) => square !== null)) {
    status = 'Round Draw !'; }
  
  else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <div className="box">
      <h1>Tic Tac Toe</h1>
      <Button value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Button value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Button value={squares[2]} onSquareClick={() => handleClick(2)} />
      <Button value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Button value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Button value={squares[5]} onSquareClick={() => handleClick(5)} />
      <Button value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Button value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Button value={squares[8]} onSquareClick={() => handleClick(8)} />
      <p className="status">{status}</p>
    </div>
  );
}

function calculateWinner(squares) {
  const result = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 

    // Cross
    [0, 4, 8],
    [2, 4, 6], 
  ];

  // Looping melalui setiap elemen dalam array result
  for (let i = 0; i < result.length; i++){

    // Deklarasikan variabel A, B, dan C untuk menyimpan indeks petak dari elemen array result
    const [a, b, c] = result [i];

    // Cek apakah nilai pada index A, B, dan C sama
    if(squares[a] == squares[b] && squares[b] == squares[c]) {
      return squares[a]
    }
  }

  return false
}
