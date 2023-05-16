//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Main(){

    return(
        <div className="mainHeader">
            <section id="promo">
                <h2>
                    Little Lemon
                </h2>
                <h3>
                    Chicago
                </h3>
                <p>
                Little Lemon is a family-owned <br/>Mediterranean restaurant, focused on traditional recipes <br/>served with a modern twist.
                </p>
                <button type="submit" id="button"> 
                    Reserve a table
                </button>
                <img src="restauranfood.jpg" alt="food" id="header-image"/>
            </section>
            <section id="second-section">
                <h2 style={{color:'black'}}>
                    This week's specials!                   
                <button type="Submit" id="button" style={{float:'right'}}>Online Menu</button>
                </h2>
            </section>
            <section id ="third-section">
                <article>
                    <a href="#greeksalad">
                        <img src="greek salad.jpg" alt="greek salad" height="160" width="254"/>
                    </a>
                    <h2 style={{color:'black'}}>
                        <a href="#greeksalad">Greek Salad</a>
                    </h2>
                    <h2>$12.99</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                </article>
                <article class="light">
                <a href="#frenchrolls"><img src="restauranfood.jpg" alt="frenchroll" height="160" width="254"/></a>
                    <h2><a href="#frenchroll">Greek Salad</a></h2>
                    <aside>
                        <h2>$14.99</h2>
                    </aside>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                </article>
                <article class="light">
                <a href="#lemonpastry"><img src="lemon dessert.jpg" alt="lemonpastry" height="160" width="254"/></a>
                    <h2><a href="#lemonpastry">Greek Salad</a></h2>
                    <aside>
                        <h2>$20.99</h2>
                    </aside>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                </article>
            </section>
            <hr></hr>
            <section>
                <h2 style={{color:'black', textAlign:'center'}}>Testimonials</h2>
                <section  id="fourth-section">
                    <article class="light">
                        <h3>Shweta</h3>
                        <img src="emoji1.webp" alt="face"></img>
                    </article >
                    <article class="light">
                        <h3>Roma</h3>
                        <img src="emoji1.webp" alt="face"></img>
                    </article>
                    <article  class="light">
                        <h3>Phil</h3>
                        <img src="emoji1.webp" alt="face"></img>
                    </article>
                </section>
            </section>
            <hr></hr>
            <section id="about">
                <h2 style={{color:'black'}}>
                    Little Lemon
                </h2>
                <h3 style={{color:'black'}}>
                    Chicago
                </h3>
                <p>
                Little Lemon is a family-owned <br/>Mediterranean restaurant, focused on traditional recipes <br/>served with a modern twist.
                </p>
                <div class="parent">
                    <img class="image1" src="icon_assets/Mario and Adrian A.jpg" alt="chefA" height='252' width="237"/>
                    <img class="image2" src="icon_assets/Mario and Adrian b.jpg" alt="chefB" height='252' width="237"/>
                </div>
            </section>
    </div>
    );
}

export default Main;