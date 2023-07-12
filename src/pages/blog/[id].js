import React from 'react'
import { useRouter } from 'next/router';

const id = ({query}) => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>動的です</h1>
      <h2>{ router.query.id }</h2>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  console.log(query);
  return {
    props: { query }
  }
}

export default id