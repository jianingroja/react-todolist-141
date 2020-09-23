import React from "react";
import "./todo.css";

const title = <h1>Jquery To Do List</h1>;
const des = <p>Sipmle Todo List with adding and filter by diff status.</p>;
const ac1 = (
  <div>
    {title}
    {des}
  </div>
);

// ==================

const ac2 = (
  <div>
    <input id="enter" />
    <button>add</button>
  </div>
);

// ==================

const list = ["All", "Active", "Complete"];
const ac3 = (
  <div id="footer">
    {list.map((a) => (
      <div className="statu">{a}</div>
    ))}
  </div>
);

// ==================

const idioma = [
  { id: 1, name: "React" },
  { id: 2, name: "JavaScipt" },
  { id: 3, name: "Java" },
  { id: 4, name: "somethingPretty" },
];
const ac4 = (
  <div id="ac4">
    <ol>
      {idioma.map((i) => {
        return (
          <li key={i.name} className={i.id % 2 === 0 ? "Odd" : null}>
            <input className="squareBox" type="radio" />
            <span>Learning {i.name}</span>
          </li>
        );
      })}
    </ol>
  </div>
);

// ==================

class Todo extends React.Component {
  render() {
    return (
      <div id="container">
        {ac1}
        {ac2}
        {ac4}
        {ac3}
      </div>
    );
  }
}

/*
ReactDOM.render(ac1, document.getElementById("ac1"));

ReactDOM.render(ac2, document.getElementById("ac2"));

ReactDOM.render(ac3, document.getElementById("ac3"));
*/

export default Todo;
