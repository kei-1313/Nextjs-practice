import { useState } from "react";


function ssr() {
  console.log("hello");
  const [state, setState] = useState('kei')
  const val = 0
  return (
    <div>
      <h1>SSR</h1>
      <h3>{val}</h3>
      <h4>{state}</h4>
    </div>
  )
}

export default ssr