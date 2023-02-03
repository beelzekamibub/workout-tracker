import React from 'react'

export const TableRow = (props) => {
  return (
    <tr>
        <th scope="row">{props.data.workout_id}</th>
        <td>{props.data.workout_title}</td>
        <td>{props.data.workout_note}</td>
        <td>{props.data.calories_burn_per_min}</td>
        <td>{props.data.category_name}</td>
    </tr>
  )
}
