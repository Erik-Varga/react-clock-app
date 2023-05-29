import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
        <br></br>
        <div className='footer'>
            <a href="https://github.com/Erik-Varga" target="_blank" rel="noreferrer">
                &copy; {(new Date().getFullYear())} Erik Varga | Web Developer
                &nbsp; <AiFillGithub className='ml-1' />
            </a>
            &nbsp;
            <a href="https://github.com/Erik-Varga/react-digital-clock" target="_blank" rel="noreferrer">
            &nbsp;
        
            Source Code &nbsp;<BsCodeSlash />
            </a>
        </div>
    </div>
  )
}
