import React from "react";
import Entry from "./Entry";
import weapons from "../weapons";

function createEntry(weaponTerm) {
    return (
      <Entry
        key={weaponTerm.id}
        weapon={weaponTerm.weapon}
        name={weaponTerm.name}
        description={weaponTerm.meaning}
      />
    );
  }
  function App() {
    return (
      <div>
        <h1>
          <span>ARMY WEAPONS</span>
        </h1>
        <dl className="dictionary">{weapons.map(createEntry)}</dl>
      </div>
    );
  }

export default App;