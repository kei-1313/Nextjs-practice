import { useState, useEffect } from "react";


function Ssr() {
  // console.log("hello");
  // console.log(message);
  const [state, setState] = useState('kei')
  const val = 0

  useEffect(() => {
    document.cookie = 'value=0, path=/ssr'
  }, [])
  return (
    <div>
      <h1>SSR</h1>
      <h3>{val}</h3>
      <h4>{state}</h4>
      {/* <h5>{message}</h5> */}
    </div>
  )
}

export default Ssr

// export async function getServerSideProps(context) {
//   const {cookie} = context.req.headers
//   return{
//     // redirect: {
//     //   destination: '/blog'
//     // },
//     props: {message: 'From Server Silde Props'}
//   }
// }