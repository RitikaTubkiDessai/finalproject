import React from "react";
import Card from "./Card";
import restauranfood from '../assets/restauranfood.jpg'
import greekSalad from "../assets/greek salad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import LemonDessert from "../assets/lemon dessert.jpg";


const specials = [
  {
    img: greekSalad,
    title: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: bruschetta,
    title: "Bruschetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: LemonDessert,
    title: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const handleClick = (e) =>
{
    e.preventDefault();
}

function Main() {
  const Cards = specials.map((item) => {
    return (
    
      <Card
        key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <main>
       
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
                <button type="submit" id="button" onClick={handleClick}> 
                    Reserve a table
                </button>
                <img src={restauranfood} alt="food" id="header-image" height="250" width="230" />
            </section>
        </div>
      <section className="specials">
        <div className="top">
          <h1>This weeks specials!</h1>
          <button type="submit" id="button" onClick={handleClick} style={{float:'right', paddingTop:"0px"}}>Online Menu</button>
        </div>
        <div className="cards">{Cards}</div>
      </section>
      <br></br>
    </main>
  );
}

export default Main;