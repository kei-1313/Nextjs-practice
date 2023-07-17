function Sg({message}) {
  return (
    <div>
      <h1>SGページ</h1>
      <h2>{message}</h2>
    </div>
  )
}

export default Sg

export async function getStaticProps() {
  return {
    props: {message: 'From Static Props'}
  }
}