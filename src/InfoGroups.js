import Tareas from "./Tareas";
import React from 'react';
import { useNavigate } from "react-router-dom";

const InfoGroups = () => {

  const navigate = useNavigate()

  const navigateHome = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>Name Group</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Task 1</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Task 2</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
      <h3>Total Points:</h3>
      <button 
        className="btn btn-danger"
        onClick={() => navigateHome()}
      >Atras</button>
    </div>
  );
};

export default InfoGroups;
