import React from 'react'
import styled from 'styled-components';

export const Contact = () => {
  return (
    <ContainerContact>
      <div className='wrapper'>
        <a href="https://www.facebook.com/eduardo.seije/" target='_blank' rel="noreferrer">
          <div  className='icon facebook'>
            <div className='tooltip'>Facebook</div>
            <span><i className='fab fa-facebook-f'></i></span>
          </div>
        </a>
        <a href="https://www.instagram.com/duseije/" target='_blank' rel="noreferrer">
          <div  className='icon instagram'>
            <div className='tooltip'>Instagram</div>
            <span><i className='fab fa-instagram'></i></span>
          </div>
        </a>
        <a href="https://github.com/EduardoSeije" target='_blank' rel="noreferrer">
          <div  className='icon github'>
            <div className='tooltip'>Github</div>
            <span><i className='fab fa-github'></i></span>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/eduardo-seije-99370a87/" target='_blank' rel="noreferrer">
          <div  className='icon linkedin'>
            <div className='tooltip'>Linkedin</div>
            <span><i className='fab fa-linkedin'></i></span>
          </div>
        </a>
      </div>
    </ContainerContact>
  );
};

const ContainerContact = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus,
*:active {
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
}

a {
  text-decoration: inherit;
  color: inherit;
}


.wrapper {
  display: inline-flex;
  z-index: 10;
}

.wrapper .icon {
  position: relative;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background-color: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background-color: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background-color: #3b5999;
  color: #ffffff;
}

.wrapper .linkedin:hover,
.wrapper .linkedin:hover .tooltip,
.wrapper .linkedin:hover .tooltip::before {
  background-color: #4652f6;
  color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background-color: #e1306c;
  color: #ffffff;
}

.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before {
  background-color: #333333;
  color: #ffffff;
}

.wrapper .youtube:hover,
.wrapper .youtube:hover .tooltip,
.wrapper .youtube:hover .tooltip::before {
  background-color: #de463b;
  color: #ffffff;
}
`