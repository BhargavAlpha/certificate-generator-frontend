import '../index.css';
const Navbar = ({props}) => {
    const { create, setCreate } = props;
    return (
      <nav className="navbar">
        <div>
        
        </div>
      <div >
        <a href="#" className="navbar-link" onClick={()=>{setCreate(true)}}>Create</a>
        <a href="#" className="navbar-link" onClick={()=>{setCreate(false)}}>Manage</a>
      </div>
        
      </nav>
    );
  };
export default Navbar;