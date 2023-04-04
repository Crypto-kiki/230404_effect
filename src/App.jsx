import { useState } from "react";
import Counter from "./components/Counter";
import { useEffect } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {}, []);

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      {toggle && <Counter />}
      {/* <counter/> 부분은 값이 있기 때문에 true라고 함 */}
      {/* {toggle ? <Counter /> : "카운터"} */}
      <button
        onClick={onClickToggle}
        className="bg-pink-300 px-4 py-2 rounded-2xl text-white font-bold mt-4"
      >
        버튼
      </button>
    </div>
  );
}

export default App;
