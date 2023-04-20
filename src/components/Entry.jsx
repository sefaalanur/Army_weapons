import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="weapon" role="img" aria-label="Tense Biceps">
          {props.weapon}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Entry;