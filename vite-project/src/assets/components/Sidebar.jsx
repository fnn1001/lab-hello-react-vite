import sidebar from '../images/sidebar.png'

function Sidebar (){
    return (
        <div className="sidebar">
        <div className="sidebar__logo">
            <img src={sidebar} alt="" />
        </div>
        <div className="sidebar__title">Vite React App</div>
        </div>
    );
    }

export default Sidebar