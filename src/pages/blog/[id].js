import React from 'react'

const id = ({query}) => {
  return (
    <div>
      <h1>動的です</h1>
      <h2>{ query.id }</h2>
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