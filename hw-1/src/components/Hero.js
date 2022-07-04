import "../index.css"
function Hero() {
  return(
  <section class="hero">
            <nav class="hero--nav" id="topNav">
                <a class="hero--nav--link link" href="">SHOW MORE PRODUCTS </a>
                <a class="hero--nav--link link" href="">ABOUT</a>
                <a class="hero--nav--link link" href="">CONTACTS</a>
                <a class="hero--nav--link link" href="">lorem ipsum</a> 
                <div class="hero--nav--buttonWrapper buttonWrapper">
                    <div class="hero--nav--buttonWrapper__box buttonBox">
                        <button class="hero--nav--buttonWrapper__btn btn">Help me to start</button>
                    </div>
                </div>

            </nav>

            <div class="hero--mainPhoto"></div>
            <img class="hero--mainPhoto__mask" src={require("../images/mainPhotomask.png")}/>
        	<div class="hero--article">
        		<h1>Lorem ipsum dolor</h1>
        		<p class="hero--article--text">Aenean tempor nulla non diam bibendum mattis. Duis fringilla eget odio vitae scelerisque. Nullam tempor tempus faucibus. Integer nibh diam, tincidunt non mi sed, semper semper sapien. Nulla eu aliquam purus, ut scelerisque turpis. Donec non congue mauris. Cras elementum sem a auctor placerat</p>
                <div class="hero--article--buttonWrapper buttonWrapper">
                    <div class="hero--article--buttonWrapper__box buttonBox">
                        <button class="btn hero--article--btn">show more products</button>
                    </div>
                </div>
        	</div>
        </section>
    );
}

export default Hero;