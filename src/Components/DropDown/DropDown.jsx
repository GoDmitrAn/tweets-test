import React, { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {selectedOption || "Выберите опцию"}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {options.map((option, index) => (
          <button
            className="dropdown-item"
            key={index}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [list, setList] = useState([
    "Элемент 1",
    "Элемент 2",
    "Элемент 3",
    "Элемент 4",
  ]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);

    // Здесь вы можете добавить свой собственный код для фильтрации списка в соответствии с выбранной опцией
    switch (option) {
      case "Опция 1":
        setList(["Элемент 1", "Элемент 2"]);
        break;
      case "Опция 2":
        setList(["Элемент 3", "Элемент 4"]);
        break;
      case "Опция 3":
        setList(["Элемент 1", "Элемент 4"]);
        break;
      default:
        setList(["Элемент 1", "Элемент 2", "Элемент 3", "Элемент 4"]);
    }
  };

  return (
    <div>
      <Dropdown
        options={["Опция 1", "Опция 2", "Опция 3"]}
        onSelect={handleOptionSelect}
      />
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;




Вот пример создания Dropdown меню с тремя опциями для фильтрации списка в React:

Создайте компонент "Dropdown", который будет содержать список опций и текущее выбранное значение:
import React, { useState } from "react";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {value}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;


Используйте компонент "Dropdown" в другом компоненте, где будет список, который нужно отфильтровать:

import React, { useState } from "react";
import Dropdown from "./Dropdown";

const List = ({ items }) => {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" ? items : items.filter((item) => item.category === filter);

  return (
    <div>
      <Dropdown
        options={["All", "Category 1", "Category 2"]}
        value={filter}
        onChange={setFilter}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
В приведенном примере в "List" создается фильтрованный список "filteredItems" на основе выбранного значения "filter".
    Значение "filter" устанавливается в "Dropdown" при выборе опции с помощью функции "setFilter".
    При этом компонент "List" отображает только элементы с выбранной категорией или все элементы, если выбрана опция "All".
Надеюсь, это поможет вам создать Dropdown меню с тремя опциями для фильтрации списка в React.
