//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Main(){

    return(
        <div className="mainHeader">
            <section id="background_green">
                <h2>
                    Little Lemon
                </h2>
                <h3>
                    Chicago
                </h3>
                <p>
                Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <aside>
                    <img src="icon_assets/restauranfood.jpg" alt="food"/>
                </aside>
                <button type="submit" > 
                    Reserve a table
                </button>
            </section>
            <section>
                <h2>This week's specials!</h2>
                <aside>
                    <button type="Submit">Online Menu</button>
                </aside>
                <article class="light">
                    <a href="#greeksalad"><img src="greek salad.jpg" alt="greek salad" height="160" width="254"/></a>
                    <h2><a href="#greeksalad">Greek Salad</a></h2>
                    <aside>
                        <h2>$12.99</h2>
                    </aside>
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
            <section>
                <h2>Testimonials</h2>
                <article>
                    <h3>Shweta</h3>
                    <img src="emoji1.webp" alt="face"></img>
                    <aside>
                    
                    </aside>
                </article>
            </section>
    </div>
    );
}

export default Main;