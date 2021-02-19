import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import emailIcon from "./../images/user_icon.svg"
import passwordIcon from "./../images/lock_icon.svg"
import heroImg from "./../images/headerImage.png"


const IndexPage = () => {
  
  return(
    <Layout>
      <SEO title="Home" />
      
      <div id="hero" style={{backgroundImage:`url(${heroImg})`}}>
           <h1>Trime</h1>
      </div>
      <form method="post">
         <div className="container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,160L60,165.3C120,171,240,181,360,197.3C480,213,600,235,720,218.7C840,203,960,149,1080,133.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
             
             <label for="email">Email</label>
              <img src={emailIcon}/> 
              <input type="text" id="email" placeholder="Enter email"style={{backgroundImage:`url(${emailIcon})`}}></input>
              <label for="password">Password</label>
              <img src={passwordIcon}/> 
              <input type="password" id="password" placeholder="Enter password"></input>
              <p>Forgot password?</p>
              <button type="submit">Sign in</button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,160L40,144C80,128,160,96,240,90.7C320,85,400,107,480,128C560,149,640,171,720,160C800,149,880,107,960,80C1040,53,1120,43,1200,32C1280,21,1360,11,1400,5.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
              </svg>
  
         </div>

      </form>
    </Layout>
  )
}

export default IndexPage
