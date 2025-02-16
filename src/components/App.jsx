// import { useState, useEffect } from "react";
// import Logo from "./Logo";
// import Form from "./Form";
// import PackingList from "./PackingList";
// import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Dozen Eggs", quantity: 2, packed: false },
//   { id: 2, description: "Gallon of Milk", quantity: 1, packed: false },
//   { id: 3, description: "Avocados", quantity: 4, packed: false },
//   { id: 4, description: "Protein Bars", quantity: 10, packed: false },
//   { id: 5, description: "Apples", quantity: 5, packed: false },
// ];

// function App() {
//   const [items, setItems] = useState(initialItems);

//   function handleAddItem(newItem) {
//     setItems((currItems) => [...currItems, newItem]);
//   }

//   function handleDeleteItem(id) {
//     console.log(id);
//     setItems((currItems) => currItems.filter((item) => item.id !== id));
//   }

//   function handleToggleItem(id) {
//     setItems((currItems) =>
//       currItems.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item
//       )
//     );
//   }

//   function handleClearList() {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete all items?"
//     );
//     confirmed && setItems([]);
//   }

//   return (
//     <div className="app">
//       <Logo />
//       <Form onAddItem={handleAddItem} />
//       <PackingList
//         items={items}
//         onDeleteItem={handleDeleteItem}
//         onToggleItem={handleToggleItem}
//         onClearList={handleClearList}
//       />
//       <Stats items={items} />
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Theme from "./Theme";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Dozen Eggs", quantity: 2, packed: false },
  { id: 2, description: "Gallon of Milk", quantity: 1, packed: false },
  { id: 3, description: "Avocados", quantity: 4, packed: false },
  { id: 4, description: "Protein Bars", quantity: 10, packed: false },
  { id: 5, description: "Apples", quantity: 5, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [theme, setTheme] = useState("day"); // the actual theme applied ("day" or "night")

  // Item management functions
  function handleAddItem(newItem) {
    setItems((currItems) => [...currItems, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((currItems) => currItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((currItems) =>
      currItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    confirmed && setItems([]);
  }

  return (
    <div className={`app ${theme}`}>
      <header>
        <Logo />
        <Theme theme={theme} setTheme={setTheme} />
      </header>
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
