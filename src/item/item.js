import React from "react";

export default function Item(props) {
  return (
    <>
      <li>{props.event_center.building}:
        {props.event_center.hall}
      </li>
    </>
  )
}
