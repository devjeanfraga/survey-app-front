import styled from 'styled-components'
import logo from '../../assets/survey_icon.png'
// import { Buttom } from '../buttons/Buttom'
import { useEffect } from 'react'
import { CortainMenu } from '../Nav/CurtainMenu'
import { NavBar } from '../Nav/NavBar'
import { display } from '../../styles/display-sizes'

const HeaderContainer = styled.header`
  display: grid;
  position: relative;
  grid-template-columns: 2fr 4fr;
  justify-items: center;
  height: max-content;
  box-shadow:
    0px 1.1px 2.2px rgba(0, 0, 0, 0.02),
    0px 2.7px 5.3px rgba(0, 0, 0, 0.028),
    0px 5px 10px rgba(0, 0, 0, 0.035),
    0px 8.9px 17.9px rgba(0, 0, 0, 0.042),
    0px 16.7px 33.4px rgba(0, 0, 0, 0.05),
    0px 35px 80px rgba(0, 0, 0, 0.07);
  h1 {
    width: 100%;
    display: flex;
    margin-left: 20px;
    align-items: center;
    font-size: 30px;
    font-weight: var(--weight-bold);
    justify-content: center;
  }
  .menu-icon {
    font-size: 40px;
    font-weight: bold;
    align-self: center;
    justify-self: end;
    margin-right: 1.5em;
  }
  .navbar {
    display: none;
  }
  ${display('forMobile')} {
    h1 {
      font-size: 25px;
    }
    .menu-icon {
      margin-right: 0.6em;
    }
  }
  ${display('forTabletLandScape')} {
    .menu-icon,
    #nav {
      display: none;
    }
    .navbar {
      display: flex;
    }
  }
`

export const Header: React.FC = () => {
  const handleToggle = () => {
    const nav = document.getElementById('nav') as HTMLElement
    nav.classList.toggle('nav-open')
  }

  useEffect(() => {
    const links = document.getElementsByTagName('a')
    for (let i = 0; i < links.length; i++) links[i].onclick = handleToggle
  })

  return (
    <div>
      <HeaderContainer>
        <h1>
          <img src={logo} alt="logo" width={'60em'} />
          SurveyApp
        </h1>
        <span
          className="material-symbols-outlined  menu-icon"
          onClick={handleToggle}
        >
          menu
        </span>
        <CortainMenu handleClose={handleToggle} id="nav" />
        <NavBar classname="navbar" />
      </HeaderContainer>
    </div>
  )
}
