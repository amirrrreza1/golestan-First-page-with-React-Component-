import "./Products.css";

const Products = () => {
  let Products = [
    {
      id: 1,
      src: "./Images/Products/ProductsIMG-1.png",
      alt: "ProductsIMG1",
      text: "سرمایه انسانی",
    },
    {
      id: 2,
      src: "./Images/Products/ProductsIMG-2.png",
      alt: "ProductsIMG2",
      text: "مراکز فروش",
    },
    {
      id: 3,
      src: "./Images/Products/ProductsIMG-3.png",
      alt: "ProductsIMG3",
      text: "محصولات گلستان",
    },
    {
      id: 4,
      src: "./Images/Products/ProductsIMG-4.png",
      alt: "ProductsIMG4",
      text: "مشتریان گلستان",
    },
  ];
  return Products.map((item , index) => {
    return (
      
        <div className="Products" key={index}>
          <div className="ProductsItems">
            <img src={item.src} alt={item.alt} width="180" height="180" />
            <div className="ProductsItemsText">{item.text}</div>
          </div>
        </div>
      
    );
  });
};

export default Products;
