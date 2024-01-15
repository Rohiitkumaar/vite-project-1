const HeroSection = () => {
  return (
    <main className="hero container">
    <div className="hero-content">
    <h1>YOUR FEET DESERVE THE BEST</h1>
    <p>YOUR FEET DESERVE THE BEST AND WE`RE HERE TO HELP YOY WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE`RE HERE TO HELP YOY WITH OUR SHOES</p>
    
  
    <div className="hero-btn">
    <button>Shop Now</button>
    <button className="secondary-btn">Category</button>
    </div>
    <div className="shopping">
    <p>Also Available on</p>
    <div className="brand-icons">
    <a href="https://amazon.com">
    <img src="/alogo.png" width={32} alt="amazon logo"/>

    </a>
    <a href="https://flipkart.com">
    <img src="/flogo.png" width={32} alt="flipkart logo"/>
    </a>
    </div>

    

    </div>

    </div>
    <div className="hero-image">

    <img src="/images.jpeg" alt="Shoe pic" width={435}/>
    </div>

    </main>
  
  )
}

export default HeroSection;