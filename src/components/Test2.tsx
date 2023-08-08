import React, { memo, useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { count } from "console";

const Test2 = () => {
  console.log("Re-render");
  return (
    <>
      <h1>Re-render:</h1>
    </>
  );
};
export default memo(Test2);
