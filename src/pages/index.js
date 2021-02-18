import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const exampleFunc = () =>{
    console.log("CLICKED YEAH")
  }
  useEffect(() => {
    document.querySelector(".example").addEventListener('click', exampleFunc);
  })

  return(
    <Layout>
      <SEO title="Home" />
      <h1 className="example">HELLO WORLD</h1>
    </Layout>
  )
}

export default IndexPage
