import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
import Form from "./Form";

function Home() {
   // State for toggling dropdown visibility (if needed)
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);  // Toggle the state value between true/false
  };

 

  const [items, setItems] = useState([]); // State to store items for the selected category
  const [item, setItem] = useState(null); // State to store single item

  const data = {
    computerLaptops: [
      { id: 1, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-09-04-64f5941d57ecd.png", description: "ESONIC h81 JEL Mothe", price: "$1200", rating: "4.5" },
      { id: 2, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-14-65cc558b0246c.png", description: "Wired Optical Mouse", price: "$1400", rating: "4.7" },
      { id: 3, image: "https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/a/c/acer-aspire-5-a514-54-53s3-intel-core-i5--1135g7-front_5_1.jpg", description: "acer aspire 5", price: "$800", rating: "4.3" },
      { id: 4, image: "https://www.laptopsdirect.co.uk/Images/UX433FAC-A5175R_6_supersize.jpg?v=1", description: "Asus zenbook 14", price: "$950", rating: "4.6" },
      { id: 5, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-09-04-64f5941d57ecd.png", description: "ESONIC h81 JEL Mothe", price: "$1200", rating: "4.5" },
      { id: 6, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-14-65cc558b0246c.png", description: "Wired Optical Mouse", price: "$1400", rating: "4.7" },
      { id: 7, image: "https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/a/c/acer-aspire-5-a514-54-53s3-intel-core-i5--1135g7-front_5_1.jpg", description: "acer aspire 5", price: "$800", rating: "4.3" },
      { id: 8, image: "https://www.laptopsdirect.co.uk/Images/UX433FAC-A5175R_6_supersize.jpg?v=1", description: "Asus zenbook 14", price: "$950", rating: "4.6" },
      { id: 9, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-09-04-64f5941d57ecd.png", description: "ESONIC h81 JEL Mothe", price: "$1200", rating: "4.5" },
      { id: 10, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-14-65cc558b0246c.png", description: "Wired Optical Mouse", price: "$1400", rating: "4.7" },
      { id: 11, image: "https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/a/c/acer-aspire-5-a514-54-53s3-intel-core-i5--1135g7-front_5_1.jpg", description: "acer aspire 5", price: "$800", rating: "4.3" },
      { id: 12, image: "https://www.laptopsdirect.co.uk/Images/UX433FAC-A5175R_6_supersize.jpg?v=1", description: "Asus zenbook 14", price: "$950", rating: "4.6" },
    ],
    phonetablets: [
      { id: 1, image: "https://down-my.img.susercontent.com/file/my-11134207-7rask-m0nvdu9csw1w27", description: "Redmi note 14", price: "Rs 40,000", rating: "4.4" },
      { id: 2, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-24-6496b14edd075.png", description: "Fast Charger", price: "Rs 1500", rating: "4.6" },
      { id: 3, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-08-23-64e5ae71d716d.png", description: "Microtel MCT-1510C", price: "Rs 1250", rating: "4.6" },
      { id: 4, image: "https://down-my.img.susercontent.com/file/my-11134207-7rask-m0nvdu9csw1w27", description: "Redmi note 14 pro", price: "Rs 35000", rating: "4.6" },
      { id: 5, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-24-6496b14edd075.png", description: "Mobile USB-A Wall Mount", price: "Rs 1700", rating: "4.6" },
      { id: 6, image: "https://down-my.img.susercontent.com/file/my-11134207-7rask-m0nvdu9csw1w27", description: "Redmi note 14", price: "Rs 40,000", rating: "4.4" },
      { id: 7, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-24-6496b14edd075.png", description: "Fast Charger", price: "Rs 1500", rating: "4.6" },
      { id: 8, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-08-23-64e5ae71d716d.png", description: "Microtel MCT-1510C", price: "Rs 1250", rating: "4.6" },
      { id: 9, image: "https://down-my.img.susercontent.com/file/my-11134207-7rask-m0nvdu9csw1w27", description: "Redmi note 14 pro", price: "Rs 35000", rating: "4.6" },
      { id: 10, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-24-6496b14edd075.png", description: "Mobile USB-A Wall Mount", price: "$700", rating: "4.6" },
    ],
    tvaudio: [
      { id: 1, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-18-65d1e08dafd93.png", description: "MT-03 EAR BUDS Act", price: "Rs 4000", rating: "4.5" },
      { id: 2, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-20-65d45be1225d9.png", description: "High Qulity Perform", price: "Rs 250", rating: "4.7" },
      { id: 3, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-18-65d1dd8ebccac.png", description: "MT-02 EARBUDS wi", price: "Rs 3500", rating: "4.3" },
      { id: 4, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-04-02-660bab11cce8c.png", description: "Interactive LED panel", price: "Rs 150,000", rating: "4.6" },
      { id: 5, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-18-65d1d8897a93d.png", description: "MT-14 Earbuds For hi", price: "Rs 2500", rating: "4.6" },
      { id: 6, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-18-65d1d2df8db9c.png", description: "Mt-32C Earbuds Tru", price: "Rs 1699", rating: "4.6" },
      { id: 7, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-18-65d1e08dafd93.png", description: "MT-03 EAR BUDS Act", price: "Rs 4000", rating: "4.5" },
      { id: 8, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-20-65d45be1225d9.png", description: "High Qulity Perform", price: "Rs 250", rating: "4.7" },
      { id: 9, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-18-65d1dd8ebccac.png", description: "MT-02 EARBUDS wi", price: "Rs 3500", rating: "4.3" },
      { id: 10, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-04-02-660bab11cce8c.png", description: "Interactive LED panel", price: "Rs 150,000", rating: "4.6" },
      { id: 11, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-18-65d1d8897a93d.png", description: "MT-14 Earbuds For hi", price: "Rs 2500", rating: "4.6" },
      { id: 12, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-18-65d1d2df8db9c.png", description: "Mt-32C Earbuds Tru", price: "Rs 1699", rating: "4.6" },
    ],
    cctv: [
      { id: 1, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-03-31-66093cbd38ee0.png", description: "3MP Wi-Fi PT Camera", price: "$1200", rating: "4.5" },
      { id: 2, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-08-28-64ec62ed6a411.png", description: "Startups Time Atte", price: "$1400", rating: "4.7" },
      { id: 3, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-03-31-66093bb450d13.png", description: "2MP Wi-Fi PT Camera", price: "$800", rating: "4.3" },
      { id: 4, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-17-64b51613bf31b.png", description: "ProLink DS-31012 Cam ", price: "$1000", rating: "4.6" },
      { id: 5, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-03-31-660940f4cd011.png", description: "Wi-Fi Door Sensor and", price: "$1200", rating: "4.5" },
      { id: 6, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-03-31-66093f643edbf.png", description: "Highly Stable Gas s.", price: "$1200", rating: "4.5" },
      { id: 7, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-08-28-64ec62ed6a411.png", description: "Startups Time Atte", price: "$1400", rating: "4.7" },
      { id: 8, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-03-31-66093bb450d13.png", description: "2MP Wi-Fi PT Camera", price: "$800", rating: "4.3" },
      { id: 9, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-17-64b51613bf31b.png", description: "ProLink DS-31012 Cam", price: "$1000", rating: "4.6" },
    ],
    cables: [
      { id: 1, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-24-6496a1b3b452b.png", description: "3.5mm Stereo Audio.", price: "Rs 510", rating: "4.5" },
      { id: 2, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-23-649523230fb03.png", description: "Mini DP to HDMI+VG", price: "Rs 2,855", rating: "4.7" },
      { id: 3, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-05-65c0cb4ba1dc0.png", description: "9 in1 USB-C To 3*3 US", price: "Rs 10,715", rating: "4.3" },
      { id: 4, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-23-649569df428aa.png", description: "VGA 4*1 Switcher U", price: "Rs 4,285", rating: "4.6" },
      { id: 5, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-25-6497efbbdd6ef.png", description: "3 Mtr USB-A To RJ4", price: "Rs 2,145", rating: "4.3" },
      { id: 6, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-15-65cdc7750ad12.png", description: "DVI-D to VGA Activ", price: "Rs 1,855", rating: "4.6" },
    ],
    power: [
      { id: 1, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-01-65bb633774453.png", description: "Toshiba Charger 65w", price: "Rs 750", rating: "4.5" },
      { id: 2, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-19-65d300ee3bacb.png", description: "PowerBank-30000mah", price: "Rs 4,199", rating: "4.7" },
      { id: 3, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-19-65d31f8dc1591.png", description: "M27L(20000mah) Li", price: "Rs 2,799", rating: "4.3" },
      { id: 4, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-19-65d312c48f93b.png", description: "M27L(20000mah) Li", price: "Rs 3,499", rating: "4.6" },
      { id: 5, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-01-65bb585caa422.png", description: "Dell 90W big pin cha", price: "Rs 1,099", rating: "4.3" },
      { id: 6, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-01-65bb5904d7dd5.png", description: "Acer Charger 65W for", price: "Rs 799", rating: "4.6" },
    ],
    printer: [
      { id: 1, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-03-64a29b57b3655.png", description: "Combo Brother HL-T", price: "Rs 94,575", rating: "4.5" },
      { id: 2, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-03-64a28d302dfa5.png", description: "Combo Brother HL", price: "Rs 30,510", rating: "4.7" },
      { id: 3, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-03-64a2ad3e935fe.png", description: "Brother ADS-2100 D", price: "Rs 77,850", rating: "4.3" },
      { id: 4, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-03-64a2967e83a04.png", description: "Brother MFC-T920DW", price: "Rs 62,050", rating: "4.6" },
      { id: 5, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-03-64a29dae1cc6d.png", description: "Brother HL-L3270CD", price: "Rs 58,500", rating: "4.3" },
      { id: 6, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-03-64a2a44b780ef.png", description: "Brother MFC-L6900D", price: "Rs 202,500", rating: "4.6" },
    ],
    networking: [
      { id: 1, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-05-64a513328be46.png", description: "USB Network Printer", price: "Rs 9,285", rating: "4.5" },
      { id: 2, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-26-64993b7d273ea.png", description: "Cat7 FTP RJ45 Module", price: "Rs 645", rating: "4.7" },
      { id: 3, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-25-6497ecc2f105d.png", description: "Network Cable Test", price: "Rs 1,855", rating: "4.3" },
      { id: 4, image: "https://i5.walmartimages.com/asr/593746b2-8be0-44c8-af13-24929af67a10.4449493e182245b7ae954bc3eb242ac6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", description: "Network Telephone ", price: "Rs 5,425", rating: "4.6" },
      { id: 5, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-25-6497f571b5964.png", description: "Cat6 RJ45 Unshield", price: "Rs 1,145", rating: "3.7" },
      { id: 6, image: "https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-25-6497eeab2708f.png", description: "UGREEN RJ 45 Network", price: "Rs 2,285", rating: "3.5" },
    ],
    
  };

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    console.log("Category Selected:", category);  // Check if the function is invoked
    setItems(data[category] || []); // Update the state with items from the selected category
    setItem(null);// reset single item view
  };

  const handleItemClick = (item) => {
    setItem(item); // Set the clicked single item's details
  };

  const handleBackClick = () => {
    setItem(null); // Go back to the category's items list
  };

  return (
    <div>

      <section className="py-2 body bg-primary-subtle">
        <div className="container">
          <div className='row'>
           <div className="col-lg-6">
             <i className="bi bi-telephone-fill px-1"></i> Contact Us : 9841825938
           </div>

           <div className="col-lg-6 text-end">
             <i className="bi-envelope-fill px-1"></i> Eshop91@gmail.com
           </div>
          </div>
        </div>
      </section>

      <header className="bg-white py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 me-2">
              <a href="/Home"><img className="logo" src="/logo.png" alt="logo" /></a>
            </div>

            <div className="col-lg-5 mt-2 ms-5">
              <form className="d-flex" role="search">
                <input className="form-control p-2" type="search" placeholder="Search here . . ." aria-label="search" />
                <button className="btn btn-primary m" type="submit"><i className="bi bi-search"></i> </button>
              </form>
            </div>

            <div className="col-lg-4 mt-2 ms-5">
              <button type="button" className="btn bg-primary-subtle rounded-circle position-relative mx-1"><i className="bi bi-heart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>

              <button type="button" className="btn bg-primary-subtle rounded-circle position-relative mx-1"><i className="bi bi-person-fill"></i>
              </button>

              <button type="button" className="btn bg-primary-subtle rounded-circle position-relative mx-1"><i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>

              <span className="dropdown ms-2">
                <button className="btn btn-white mx-1 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  My Cart
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><h6 className="red"><i className="bi bi-cart-plus"></i> Cart Empty</h6></a></li>
                </ul>
              </span>

              <Form />

            </div>
          </div>
        </div>
      </header>

      
    <nav className="navbar navbar-expand-lg my">
      <div className="container">
        <div className="dropdown me-5">
          <button className="btn btn-light px-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("computerLaptops")}><img src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b63823da07a.png" alt="" />Computer & Laptops</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("phonetablets")}><img src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b6380c05255.png" alt="" />Phones & Tablets</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("tvaudio")}><img src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b6383885a62.png" alt="" /> TV & Audio</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("cctv")}><img src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b637f6a22a2.png" alt="" /> CCTv and Biometric</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("cables")}><img src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b63772f1f22.png" alt="" />Cables & connectors</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("power")}><img src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b63762bbc5e.png" alt="" /> Power solutions</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("printer")}><img src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b637b2b8ee8.png" alt="" /> Printers & Projectors</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"  onclick={() => handleCategoryClick("networking")}><img src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b637a42c429.png" alt="" /> Networking & Connectivity</a></li>
              <li><hr className="dropdown-divider" /></li>
            </ul>
          </div>

        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0 text-center">
           <li className="nav-item pe-4">
            <nav><Link className='text-white pn d-flex align-items-center' to ="/Home" onClick={() => setItems([])}>Home</Link></nav>
           </li>

           <li className="nav-item px-4">
            <nav><Link className='text-white pn' to ="/About" onClick={() => setItems([])}>About</Link></nav>
           </li>

           <li className="nav-item px-4">
            <a className="nav-link" href="#">Discounted Products</a>
           </li>


           <li className="nav-item px-4">
           <nav><Link className='text-white pn' to ="/Contact" onClick={() => setItems([])}>Contact</Link></nav>
           </li>

          </ul>
        </div>
      </div>
    </nav>

     {/*display items here*/}
          {!item && items.length > 0 && (
            <div className="items-container">
              {items.map((item) => (
              <div key={item.id} className='item-card' onClick={() => handleItemClick(item)} style={{cursor:'pointer'}}>
               <img src={item.image} alt={item.description} className='item-image' />
                <h5 className='items-description'>{item.description}</h5>
                <p className="item-price">{item.price}</p>
                <p className="item-rating">Rating: {item.rating} ⭐</p>
              </div>
             ))}
            </div>
        )}

      {/* Single Item Details */}
         {item && (
          <div className="item-details">
            <div>
            <button class='lbtn' onClick={handleBackClick}><i class='bi bi-arrow-left'></i> Back</button>
            </div>
             <div className='item-details-card'>
               <img src={item.image} alt={item.description} className="item-details-image" />
               <h2>{item.description}</h2>
               <h4 className='item-price py-2'>Price : {item.price}</h4>
               <p className='item-rating'>Rating : {item.rating} ⭐</p>
              </div>
          </div>
        )}

 </div>
  )
}

export default Home;
