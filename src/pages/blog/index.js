import Link from 'next/link'
import Layout2 from "../../components/layout/layout2"


function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <Link href="/">
        トップへ
      </Link>
    </div>
  )
}

export default Blog

Blog.getLayout = (page) => {
  return <Layout2>{page}</Layout2>
}

