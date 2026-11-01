import Card from "../components/Card";
import Footer from "../components/Footer";
import { useState,useEffect } from "react";


function Menu(){

    const [menus, setmenus]=useState([])

 useEffect(() => {
  async function getmenu() {
    try {
      const response = await fetch("http://localhost:5000/api/menu");

      if (!response.ok) {
        throw new Error("Failed to fetch menu data");
      }

      const data = await response.json();
      console.log("Menu data:", data);

      setmenus(data);
    } catch (error) {
      console.log("Menu API Error:", error);
    }
  }

  getmenu();
}, []);
  
  return(
    <>
    <section className="bg-yellow-50 pt-30 ">
    <div className="p-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
     {menus.map((menu) => (
  <Card
    key={menu.id}
    {...menu}
  />
))}
            </div>
  </section>
  

  <Footer />
 
    </>
  )
}

export default Menu;