import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 30 ,
    gap: "20px",
    display:"flex"}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <div>
      <NavLink to={"/"}>Home</NavLink>
</div>
<div>
      <NavLink to={"/about"}>About</NavLink>
</div>
      <NavLink to={"/products"}>Products</NavLink>


      <NavLink to={"/products/men"}>Men</NavLink>
      <NavLink to={"/products/women"}>Women</NavLink>

      <NavLink to={"/products/kids"}>Kids</NavLink>

      <NavLink to={"/products/homedecor"}>Home Decor</NavLink>
    </nav>
  );
};