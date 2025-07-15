import React from "react";
import { Button, Input, Select } from "antd";

const options = [
  { label: "america", value: "america" },
  { label: "canada", value: "canada" },
  { label: "nigeria", value: "nigeria" },
];

function Homepage() {
  return (
    <div className="p-5">
      <h1 className="bg-blue-500 text-white p-4 m-3 text-center text-3xl">
        Angel Hands Home Care
      </h1>

      <Button className="m-3">Default Button</Button>
      <Button className="m-3" type="primary">
        Primary Button
      </Button>
      
      <Input
        className=""
        placeholder="Basic Input"
        style={{ width: "40%", margin: 15 }}
      />
      <Select
        className=""
        options={options}
        style={{ width: "40%", margin: 15 }}
        placeholder="Please select"
      />
    </div>
  );
}

export default Homepage;
