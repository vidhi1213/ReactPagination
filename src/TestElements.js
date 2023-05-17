// import {useState} from 'react';

// export default function TestElements({labelOn, labelOff}) {
//   const [isChecked, setIsChecked] = useState(false);

//   const onChange = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <label>
//       <input type="checkbox" checked={isChecked} onChange={onChange} />
//       {isChecked ? labelOn : labelOff}
//     </label>
//   );
// }

import React, { useState } from "react";

const TestElements = () => {
const [counter, setCounter] = useState(0);

const incrementCounter = () => {
setCounter((prevCounter) => prevCounter + 1);
};

const decrementCounter = () => {
setCounter((prevCounter) => prevCounter - 1);
};

return (
<>
<button data-testid="increment" onClick={incrementCounter}>
+
</button>
<p data-testid="counter">{counter}</p>
<button disabled data-testid="decrement" onClick={decrementCounter}>
-
</button>
</>
);
};

export default TestElements;