import React from "react";
import Button from "../components/Button";
import pic from "../assets/back.jpg";
const Home = () => {
  const [state, setState] = React.useState([]);
  const [task, setTask] = React.useState("");

  const addTask = () => {
    if(task === "") return
    setState((ele) => [
      ...ele,
      {
        id: ele.length,
        task: task,
        edit: false,
      },
    ]);
    setTask("");
    console.log(state);
  };

  const deleteTask = (id) => {
    setState(state.filter((element) => element.id !== id));
  };

  const eventHandler = (e) => {
    setTask(e.target.value)
  }

  const editTask = (id) => {
    setState(state => state.map((element)=> element.id === id ? {...element, edit:!element.edit}: element))
  }

  const editEvent = (value,id) => {
    setState(state => state.map((element)=> element.id === id ? {...element, task:value}: element))
  }

  return (
    <div
      className=" h-screen w-full bg-no-repeat bg-cover "
      style={{ backgroundImage: "url(" + pic + ")" }}
    >
      <div className="h-4 w-4 "></div>
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-5/6">
        <div className="h-full backdrop-blur-xl bg-white/30 my-2 rounded-md p-2 overflow-auto">
          {state.map((element, index) => {
            return (
              <div
                key={index}
                className="bg-primary m-2 text-accent p-2 rounded-md font-bold flex"
              >
                <p
                  className="grow"
                  style={{ display: element.edit ? "none" : "" }}
                >
                  {element.task}
                </p>
                <input
                  onChange={(e) => {
                    editEvent(e.target.value, element.id);
                  }}
                  type="text"
                  className="grow bg-secondary-700 hover:bg-secondary-500 text-accent font-bold py-2 px-4 rounded hover:bg-secondary-500 border-none outline-none h-12"
                  style={{ display: element.edit ? "" : "none" }}
                  defaultValue={element.task}
                />
                <button
                  onClick={() => editTask(element.id)}
                  className="hover:text-gray-500"
                >
                  <svg
                    style={{ display: element.edit ? "none" : "" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <svg style={{ display: element.edit ? "" : "none" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => deleteTask(element.id)}
                  className="hover:text-red-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex w-full">
          <input
          onChange={eventHandler}
            className="bg-primary hover:bg-primary-700 text-accent font-bold py-2 px-4 rounded hover:bg-secondary-500 border-none outline-none h-12 flex-grow"
            placeholder="Add your task"
            value={task}
          />
          <Button onClick={addTask}>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
