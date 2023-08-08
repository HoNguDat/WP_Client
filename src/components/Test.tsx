import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import Test2 from "./Test2";

export default function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Test</h1>
      <Test2/>
      <h2>{count}</h2>
      <button onClick={increase}>Click</button>
    </>
  );
}
