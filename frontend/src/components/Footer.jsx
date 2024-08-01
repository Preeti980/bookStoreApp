import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
function Footer() {
  return (
    <div>
        <hr/>
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 dark:bg-slate-900 dark:text-white">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover" href='/about'>About us</a>
    <a className="link link-hover" href='/contact'>Contact</a>
    <a className="link link-hover" href='/course'>Course</a>

  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
       <FaLinkedin size={30} color='blue'/>
      </a>
      <a>
        <FaGithub size={30}/>
      </a>
      <a>
        <FaTelegram size={30} color='#229ED9'/>
      </a>
    </div>
  </nav>
  <aside>
    <p> © {new Date().getFullYear()} </p>
  </aside>
</footer>
    </div>
  )
}

export default Footer