import React from 'react'
import "./footer.css";

const  Footer =()=>{ 

    return (
   <footer className='flex'>
    <ul className='flex'>
      <li><a href="">About</a></li>
      <li><a href="">Projects</a></li>
      <li><a href="">Speaking</a></li>
      <li><a href="">Users</a></li>
    </ul>

    <p>© 2024 GHOBNI YAMINA. All Rights Reserved.</p>
    <p>Connect with me on <a href="https://www.linkedin.com/in/yamina-ghobni/"> LinkedIn</a> | <a href=""> GitHub</a> | <a href=""> Twitter</a></p>
    <p>Designed with ❤️ by YAMINA GHOBNI | Built with React, Node.js, and more.</p>
   </footer>
    
);
}
export default Footer;
