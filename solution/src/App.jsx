import { useState } from "react";
import "./App.css";

export default function App() {
  function Card({ obj, index, gridIndex }) {
    return (
      <div
        onClick={(e) => {
          if (!insertMode) {
            startInsert(index, obj, gridIndex);
          }
        }}
        className="cursor-pointer p-2 my-1 flex gap-2 bg-sky-200"
      >
        {obj.name} : {obj.age}
      </div>
    );
  }

  const Draggable = [
    {
      name: "Jugal",
      age: 21,
    },
    {
      name: "Vijya",
      age: 80,
    },
    {
      name: "Bhavana",
      age: 50,
    },
    {
      name: "Rajesh",
      age: 53,
    },
    {
      name: "Rutva",
      age: 26,
    },
  ];
  const gridArr = [[
    {
      name: "Jugal",
      age: 21,
    },
    {
      name: "Vijya",
      age: 80,
    },
  ], [], [], [], [], [], [], [], []];

  const [initialQuestions, setInitialQuestions] = useState(Draggable);
  const [initialGrid, setGrid] = useState(gridArr);
  const [insertMode, setMode] = useState(false);
  const [buffer, setBuffer] = useState({});

  function startInsert(index, obj, gridIndex) {
    console.log("started insert mode", {
      ind: index,
      object: obj,
      gridIndex: gridIndex,
    });
    if (insertMode) {
      return;
    }
    setMode(true);
    setBuffer(obj);
    if (gridIndex == -1) {
      setInitialQuestions((prevQuestions) => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions.splice(index, 1);
        return updatedQuestions;
      });
      return;
    }
    setGrid((prevGrid) => {
      const updatedGrid = [...prevGrid];
      updatedGrid[gridIndex].splice(index, 1);
      return updatedGrid;
    });
    return;
  }

  function insertIntoGrid(gridIndex) {
    if (!insertMode) {
      return;
    }
    console.log("inserting in", gridIndex);
    setMode(false);
    if (gridIndex == -1) {
      setInitialQuestions(prevQuestions => [...prevQuestions, buffer]);
      setBuffer({});
      return
    }
    setGrid(prevGrid => {
      const updatedGrid = [...prevGrid];
      updatedGrid[gridIndex].push(buffer);
      return updatedGrid;
    });
    setBuffer({});
    return;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-3">
        {initialGrid.map((item, gridIndex) => {
          return (
            <div
              onClick={() => insertIntoGrid(gridIndex)}
              className="bg-white p-4 m-3 flex flex-col h-36 w-32 text-black"
            >
              {item.map((obj, index) => {
                return <Card gridIndex={gridIndex} obj={obj} index={index} />;
              })}
            </div>
          );
        })}
      </div>
      <div>
        {buffer.name} : {buffer.age}
      </div>
      <div>
        <div
          onClick={() => {
            if (insertMode) {
              insertIntoGrid(-1);
            }
          }}
          className="p-2 bg-white text-black rounded-md flex gap-2 min-w-fit h-full"
        >
          {initialQuestions.map((item, index) => {
            return <Card obj={item} index={index} gridIndex={-1} />;
          })}
        </div>
      </div>
    </div>
  );
}
