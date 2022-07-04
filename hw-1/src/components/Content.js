import "../index.css"
function Content() {
  return (<main class="products">
            <div class="products--container container">
                <div class="products--container--box">

                    <img class ="products--container--box__img" src={require("../images/camera3.png")}/>
                    <div class="products--container--box__details">
                        <div class="products--container--box__details__circle"></div>
                        <div class="products--container--box__details__fog"></div>
                        <div class="products--container--box__details__content">
                            <h2>Nullam tempor tempus</h2>
                            <p class="products--container--box__details__content__text">Nullam gravida, nisl ac efficitur interdum, ipsum velit sollicitudin mauris, eu dapibus orci augue ut quam</p>
                        <a class="products--container--box__details__link" href="#">Read more</a>
                        </div>
                    </div>
                </div>
                <div class="products--container--box">
                    <img class ="products--container--box__img" src={require("../images/camera2.png")}/>
                    <div class="products--container--box__details">
                        <div class="products--container--box__details__circle"></div>
                        <div class="products--container--box__details__fog"></div>
                        <div class="products--container--box__details__content">
                            <h2>Nullam tempor tempus</h2>
                            <p class="products--container--box__details__content__text">Nullam gravida, nisl ac efficitur interdum, ipsum velit sollicitudin mauris, eu dapibus orci augue ut quam</p>
                            <a class="products--container--box__details__link" href="#">Read more</a>
                        </div>
                    </div>
                </div>
                <div class="products--container--box products--container--box3">
                    <img class ="products--container--box__img" src={require("../images/camera1.png")}/>
                    <div class="products--container--box__details">
                        <div class="products--container--box__details__circle"></div>
                        <div class="products--container--box__details__fog"></div>
                        <div class="products--container--box__details__content">
                        <h2>Yongnuo YN 50 mm F1.8 Nikon</h2>
                        <p class="products--container--box__details__content__text">Nullam gravida, nisl ac efficitur interdum, ipsum velit sollicitudin mauris, eu dapibus orci augue ut quam</p>
                        <a class="products--container--box__details__link" href="#">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products--infoBox">
                <div class="products--infoBox--container">
                    <h1 class="products--infoBox--container--title"> Lorem ipsum dolor</h1>
                    <p class="products--infoBox--container--text">Aenean tempor nulla non diam bibendum mattis. Duis fringilla eget odio vitae scelerisque. Nullam tempor tempus faucibus. Integer nibh diam, tincidunt non mi sed, semper semper sapien. Nulla eu aliquam purus, ut scelerisque turpis. Donec non congue mauris. Cras elementum sem a auctor placerat</p>
                    <div class="buttonWrapper products--infoBox--container--buttonWrapper">
                        <div class="products--infoBox--container--buttonWrapper--box buttonBox">
                            <button class="btn products--infoBox--container--btn">Help me to start</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
          );
}

export default Content;
