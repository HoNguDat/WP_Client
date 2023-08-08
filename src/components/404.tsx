import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div
        className="background-error"
        style={{
          backgroundColor: "#121821",
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <div>
          <h1 style={{ color: "white", fontSize: 80, marginTop: 100 }}>
            Oops!
          </h1>
          <Button type="primary">
            <Link to={"/"}>GO TO LOGIN </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
export default Error;
