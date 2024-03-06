import { useState } from "react";

export default function CounterApples() {
  const [leftCount, setLeftCount] = useState(10);
  const [rightCount, setRightCount] = useState(10);
  function leftInc() {}

  return (
    <div className="container">
      <div>
        <p>{countBucket1} apples</p>
        <p>Bucket1</p>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/128/9312/9312240.png"
        alt=""
      />
      <img src="https://cdn-icons-png.flaticon.com/128/271/271226.png" alt="" />
      <div>
        <p>{countBucket2} apples</p>
        <p>Bucket2</p>
      </div>
    </div>
  );
}
