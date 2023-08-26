import React from 'react'

const Footer = () => {

    const newyear = new Date();

  return (
    <footer>
         Copyright &copy; {newyear.getFullYear()}
    </footer>
  )
}

export default Footer