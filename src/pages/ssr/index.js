import { useState } from "react";


function ssr({message}) {
  // console.log("hello");
  console.log(message);
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

export async function getServerSideProps(context) {
  return{
    redirect: {
      destination: '/blog'
    },
    props: {message: 'From Server Silde Props'}
  }
}