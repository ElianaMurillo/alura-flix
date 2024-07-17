import { useContext } from "react";
import { ThemeContext } from './Theme.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import "../App.css";

function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return <header  data-theme={theme} className="header">
        <img src="/img/logo.png" alt="logo" className="logo"/>
        <div className="header-buttons">
          <button className='button-style'>HOME</button>
          <button className='button-style'>NUEVO VIDEO</button>
          <button className='button-style' onClick={() => toggleTheme()}>
            {theme === 'dark-theme' ?
              <FontAwesomeIcon icon={faSun} className='icon-light-theme'/>
              :
              <FontAwesomeIcon icon={faMoon} />
            }
          </button>
        </div>
    </header>

}

export default Header;