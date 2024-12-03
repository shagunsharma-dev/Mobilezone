import React from "react";
import "../../../App.css";
import Breadcrumbs from "../../Layout/Navigations/Breadcrumbs";
import ProductSection from "../../Product/ProductList";
import TopHeader from "../Header/Topheader";
import SearchPanel from "../Header/SearchPanel";
import Footer from "../Footer";
  
const WishlistPage = () => {
  const paths = [
    {
      name: "Home",
      url: "/",
      icon:"fa fa-home",
    },
{
  name: "Wishlist",
  url: "/wishlist",
  icon: "fa fa-heart",
},

    {
      name: " ",
      url: " ",
      icon: " ",
    },
  ];

  return (
    <div>
      <TopHeader />
      <SearchPanel />
      <Breadcrumbs paths={paths} />
      <div>
        <ProductSection />
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default WishlistPage;
