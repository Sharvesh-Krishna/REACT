import React, { useState } from "react";
import Child from "./Child";
// import { useState } from "react";
const Parent = () => {
  //   const name1 = "Abc";
  //   const name2 = "Xyz";
  //   return (
  //     <>
  //       <Child name={name1} />
  //       <Child name={name2} />
  //     </>
  //   );
  // const add = (a, b) => a + b;

  // console.log(add(2, 3));

  //   const [count, setcount] = useState(0);

  //   const increment = () => {
  //     setcount(count + 1);
  //   };
  //   const decrement = () => {
  //     setcount(count - 1);
  //   };
  //   return (
  //     <>
  //       <button onClick={increment}>Inc</button>
  //       <p>Count:{count}</p>
  //       <button onClick={decrement}>Dec</button>
  //     </>
  //   );

  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };

  return (
    <>
      <button onClick={increment}>Inc</button>
      <p>Count:{count}</p>
      <button onClick={decrement}>dec</button>
    </>
  );
};

export default Parent;