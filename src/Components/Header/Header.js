import React, {useState} from "react";
import imgLogo from "../../Assets/AssetsHeader/logoHeader.svg";
import imgUser from "../../Assets/AssetsHeader/user.svg";
import imgSearch from "../../Assets/AssetsHeader/search.svg";
import imgFavorite from "../../Assets/AssetsHeader/favorites.svg";
import imgCart from "../../Assets/AssetsHeader/car.svg";
import menu from "../../Assets/AssetsHeader/menu.svg";
import btnClose from "../../Assets/AssetsHeader/close.png";
import imgItem1 from "../../Assets/AssetsHeader/asgaard.svg";
import imgItem2 from "../../Assets/AssetsHeader/wood.svg";

const Header = () => {
    const [menuCartOpen, setMenuCartOpen] = useState(false);

    const toggleMenu = (event) => {
        event.preventDefault();
        setMenuCartOpen(!menuCartOpen);
    };

    return (
        <>
            <header className="header">
                <div className="containerLarge">
                    <div className="logo">
                        <a href="/" title="Ínicio">
                            <img src={imgLogo} alt="Logo do site" title="Logo do site" className="imgLogo"/>
                            <h4 className="textLogo">Furniro</h4>
                        </a>
                    </div>

                    <nav className="menu">
                        <ul>
                            <li><a href="/" className="linkMenu">Home</a></li>
                            <li><a href="#shop" className="linkMenu" target="_blank">Shop</a></li>
                            <li><a href="#about" className="linkMenu" target="_blank">About</a></li>
                            <li><a href="#contact" className="linkMenu" target="_blank">Contact</a></li>
                        </ul>
                    </nav>

                    <nav className="menuIcons">
                        <ul>
                            <li>
                                <a href="/" target="_blank" title="Usuário" className="none">
                                    <img src={imgUser} alt="Usuário"/>
                                </a>
                            </li>
                            <li>
                                <a href="/" target="_blank"  title="Procurar" className="none">
                                    <img src={imgSearch} alt="Procurar"/>
                                </a>
                            </li>
                            <li>
                                <a href="/" target="_blank" title="Meus Favoritos" className="none">
                                    <img src={imgFavorite} alt="Meus Favoritos"/>
                                </a>
                            </li>
                            <li>
                                <a href="/" target="_blank" title="Meu carrinho de compra" onClick={toggleMenu}>
                                    <img src={imgCart} alt="Meu carrinho de compra"/>
                                </a>
                            </li>
                            <button type="button" className="btnMenu">
                                <img src={menu} alt="Menu" title="Menu"/>
                            </button>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className={`cartSidebar ${menuCartOpen ? 'open' : ''}`}>
                <div className="overlay" onClick={toggleMenu}></div>
                <aside>
                    <div className="top">
                        <h3 className="title">Seu carrinho</h3>
                        <button className="btnClose" onClick={toggleMenu}>
                            <img src={btnClose} alt="Fechar" title="Fechar Carrinho"/>
                        </button>
                    </div>
                    <div className="ContentItens">
                        <div className="boxItem">
                            <div className="imgItem">
                                <img src={imgItem1} alt="Item no carrinho" title="Item no carrinho"/>
                            </div>
                            <div className="contentText">
                                <h6 className="titleItem">Asgaard sofa</h6>
                                <div className="textItem">
                                    <span>1</span>
                                    <span>X</span>
                                    <span className="fontStyle">Rs. 250,000.00</span>
                                </div> 
                            </div>
                            <button className="closeItem" title="Excluir item do carrinho">X</button>
                        </div>
                        <div className="boxItem">
                            <div className="imgItem">
                                <img src={imgItem2} alt="Item no carrinho" title="Item no carrinho"/>
                            </div>
                            <div className="contentText">
                                <h6 className="titleItem">Casaliving Wood</h6>
                                <div className="textItem">
                                    <span>1</span>
                                    <span>X</span>
                                    <span className="fontStyle">Rs. 270,000.00</span>
                                </div> 
                            </div>
                            <button className="closeItem" title="Excluir item do carrinho">X</button>
                        </div>
                        <div className="boxItem">
                            <div className="imgItem">
                                <img src={imgItem2} alt="Item no carrinho" title="Item no carrinho"/>
                            </div>
                            <div className="contentText">
                                <h6 className="titleItem">Casaliving Wood</h6>
                                <div className="textItem">
                                    <span>1</span>
                                    <span>X</span>
                                    <span className="fontStyle">Rs. 270,000.00</span>
                                </div> 
                            </div>
                            <button className="closeItem" title="Excluir item do carrinho">X</button>
                        </div>
                        {/* <div className="boxItem">
                            <div className="imgItem">
                                <img src={imgItem1} alt="Item no carrinho" title="Item no carrinho"/>
                            </div>
                            <div className="contentText">
                                <h6 className="titleItem">Asgaard sofa</h6>
                                <div className="textItem">
                                    <span>1</span>
                                    <span>X</span>
                                    <span className="fontStyle">Rs. 250,000.00</span>
                                </div> 
                            </div>
                            <button className="closeItem" title="Excluir item do carrinho">X</button>
                        </div>
                        <div className="boxItem">
                            <div className="imgItem">
                                <img src={imgItem2} alt="Item no carrinho" title="Item no carrinho"/>
                            </div>
                            <div className="contentText">
                                <h6 className="titleItem">Casaliving Wood</h6>
                                <div className="textItem">
                                    <span>1</span>
                                    <span>X</span>
                                    <span className="fontStyle">Rs. 270,000.00</span>
                                </div> 
                            </div>
                            <button className="closeItem" title="Excluir item do carrinho">X</button>
                        </div>
                        <div className="boxItem">
                            <div className="imgItem">
                                <img src={imgItem2} alt="Item no carrinho" title="Item no carrinho"/>
                            </div>
                            <div className="contentText">
                                <h6 className="titleItem">Casaliving Wood</h6>
                                <div className="textItem">
                                    <span>1</span>
                                    <span>X</span>
                                    <span className="fontStyle">Rs. 270,000.00</span>
                                </div> 
                            </div>
                            <button className="closeItem" title="Excluir item do carrinho">X</button>
                        </div> */}
                    </div>
                    <div className="bottom">
                        <div className="textContent">
                            <h3 className="title">Subtotal</h3>
                            <span className="subtotalValor">Rs. 520,000.00</span>
                        </div>

                        <nav>
                            <ul>
                                <li>
                                    <a href="#" title="Ver mais do carrinho">Cart</a>
                                </li>
                                <li>
                                    <a href="#" title="Ir para checkout">Checkout</a>
                                </li>
                                <li>
                                    <a href="#" title="Comparar valores">Comparação</a>
                                </li>
                                <li>
                                    <a href="#" title="Comparar valores" className="btnMobileCart">Ver carrinho completo</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default Header;