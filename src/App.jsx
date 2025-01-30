import './App.css';
import calculateSoldTVs from "./helpers/calculateSoldTVs.js";
import calculateOriginalStock from "./helpers/calculateOriginalStock.js";
import calculateTVsToSell from "./helpers/calculateTVsToSell.js";
import getNameTV from "./helpers/getNameTV.js";
import {bestSellingTv} from "./constants/inventory.js";
import getPriceTV from "./helpers/getPriceTV.js";
import getScreenSizes from "./helpers/getScreenSizes.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";

function mostSoldFirst() {
    console.log("Meest verkocht eerst");
}

function cheapestFirst() {
    console.log("Goedkoopste eerst");
}

function bestForSportsFirst() {
    console.log("Meest geschikt voor sport eerst");
}

function App() {
    return (
        <>
            <main className="main-container">
                <h1>📺 Tech It Easy Dashboard</h1>
                <section>
                    <h2>Verkoopoverzicht</h2>
                    <div className="products-container">
                        <article className="product-tiles sold-container">
                            <p>Aantal verkochte producten</p>
                            <h2>{calculateSoldTVs()}</h2>
                        </article>
                        <article className="product-tiles original-stock-container">
                            <p>Aantal ingekochte producten</p>
                            <h2>{calculateOriginalStock()}</h2>
                        </article>
                        <article className="product-tiles current-stock-container">
                            <p>Aantal te verkopen producten</p>
                            <h2>{calculateTVsToSell()}</h2>
                        </article>
                    </div>
                    <h2>Best verkochte tv</h2>
                    <article className="best-selling-tv-container">
                        <span className="tv-image">
                            <img src={bestSellingTv.sourceImg} alt="Onze best verkochte tv"/>
                        </span>
                        <div className="best-selling-tv-info">
                            <h2>{getNameTV(bestSellingTv)}</h2>
                            <h2>{getPriceTV(bestSellingTv.price)}</h2>
                            <p>{getScreenSizes(bestSellingTv.availableSizes)}</p>
                            <ul className="tv-info-list">
                                <li><img src={check} alt="Icoon: vinkje"/> wifi</li>
                                <li><img src={minus} alt="Icoon: geen vinkje"/> speech</li>
                                <li><img src={check} alt="Icoon: vinkje"/> hdr</li>
                                <li><img src={check} alt="Icoon: vinkje"/> bluetooth</li>
                                <li><img src={minus} alt="Icoon: geen vinkje"/> ambilight</li>
                            </ul>
                        </div>
                    </article>
                    <button type="button" onClick={mostSoldFirst}>Meest verkocht eerst</button>
                    <button type="button" onClick={cheapestFirst}>Goedkoopste eerst</button>
                    <button type="button" onClick={bestForSportsFirst}>Meest geschikt voor sport eerst</button>
                </section>
            </main>
        </>
    )
}

export default App
