import { useRouter } from 'next/router';


const Id = () => {
  const router = useRouter();
  console.log(router);

  const clickHandler = () => {
    router.push('/');
  }

  const clickHandlerBack = () => {
    router.back();
  }

  return (
    <div>
      <h1>動的です</h1>
      {/* <h2>{ router.query.id }</h2> */}
      <button onClick={clickHandler}>トップへ画面遷移</button>
      <button onClick={clickHandlerBack}>戻る</button>

      
    </div>
  )
}

// export async function getServerSideProps({ query }) {
//   console.log(query);
//   return {
//     props: { query }
//   }
// }

export default Id