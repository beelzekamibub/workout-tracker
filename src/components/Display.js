import React from 'react'
import { useState,useEffect } from 'react';
import { TableRow } from './TableRow';

export default function Display() {
    const url="http://localhost:8082/WorkoutCollection";
    const [workouts, setWorkouts] = useState([])
    let i=0;
    useEffect(() => {
         fetch(url)
         .then(res=>res.json())
         .then(data=>{
             setWorkouts(data)
         })
      }, [])
      const l=workouts.map((e)=><TableRow data={e}></TableRow>)
  return (
    <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">workout_title</th>
                    <th scope="col">workout_note</th>
                    <th scope="col">calories_burn_per_min</th>
                    <th scope="col">category_name</th>
                    </tr>
                </thead>
                <tbody>
                   {l}                   
                </tbody>
            </table>
    </div>
  )
}
