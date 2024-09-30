function Header() {
    return(
        <header className="header">
            <img src="images/meme.jpeg" alt="meme" width={35} height={35} className="header--logo"/>
            <h2 className="header--title">Meme Generator</h2>
            <img src="images/kratos-image.jpeg" alt="kratos logo" width={20} height={20} className="header--image_round"/>
            <h4 className="header--project">Kratos 战争</h4>
        </header>
    );
}

export default Header;