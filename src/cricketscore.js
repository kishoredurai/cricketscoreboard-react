import React, { useState } from 'react';

const CricketScore = () => {
  const [TotalScore, setTotalScore] = useState(0);
  const [TotalWide, setTotalWide] = useState(0);
  const [TotalNoBall, setTotalNoBall] = useState(0);
  const [TotalWicket, setTotalWicket] = useState(0);
  const [TotalBalls,setTotalBalls] = useState(0);

  const WideBall = () => {
    setTotalScore(TotalScore + 1);
    setTotalWide(TotalWide + 1 );
    setTotalBalls(TotalBalls +1);
  };

  const NoBall = () => {
    setTotalNoBall(TotalNoBall + 1);
    setTotalScore(TotalScore + 1);
  };

  const Wicket = () => {
    setTotalWicket(TotalWicket + 1);
    setTotalBalls(TotalBalls +1);

 };

  const updatescore = (score) => {
    setTotalScore(TotalScore + score);
    setTotalBalls(TotalBalls +1);

  };



  return (
    <div className="app">
      <div className="card">
        <h1>𝒔𝒄𝒐𝒓𝒆 𝒃𝒐𝒂𝒓𝒅</h1>
        <br></br>
        <div className="counter">
        <table id="customers">
      <tr>
      <th>Total Score</th>
      <th>Total Balls</th>
    <th>Total NoBall</th>
    <th>Total Wide</th>
    <th>Total Wicket</th>
    </tr>
    <tr>
    <td>{TotalScore}</td>
      <td>{TotalBalls}</td>
    <td>{TotalNoBall}</td>
    <td>{TotalWide}</td>
    <td>{TotalWicket}</td>
    </tr>
    </table>
         
        </div>
          <br></br>
          <button onClick={()=>updatescore(0)}>0</button>
          <button onClick={()=>updatescore(1)}>1</button>
          <button onClick={()=>updatescore(2)}>2</button>
          <button onClick={()=>updatescore(3)}>3</button>
          <button onClick={()=>updatescore(4)}>4</button>
          <button onClick={()=>updatescore(5)}>5</button>
          <button onClick={()=>updatescore(6)}>6</button>
          <button onClick={()=>WideBall()}>Wide</button>
          <button onClick={()=>NoBall()}>Noball</button>
          <button onClick={()=>Wicket()}>Wicket</button>
      </div>
    </div>
  );
};

export default CricketScore;
