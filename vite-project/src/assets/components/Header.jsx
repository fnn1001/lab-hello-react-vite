import logo from '../images/logo.png'
function Header (){
    return (
        <div className="header">
        <div className="header__logo">
            <img src={logo} alt="" />
        </div>
        <div className="header__title">Vite React App</div>
        </div>
    );
    }

export default Header