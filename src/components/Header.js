import Logo from '../assets/Logo.svg'

function Header(){

    return(
        <img src={Logo} alt="logo" height="100" width="330" border-radius="30" style={{display:'inline'}}></img>
    );

}

export default Header;