import './App.css';
import calculateSoldTVs from "./helpers/calculateSoldTVs.js";
import calculateOriginalStock from "./helpers/calculateOriginalStock.js";
import calculateTVsToSell from "./helpers/calculateTVsToSell.js";
import getNameTV from "./helpers/getNameTV.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import getPriceTV from "./helpers/getPriceTV.js";
import getScreenSizes from "./helpers/getScreenSizes.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import showOutcomeInConsole from "./constants/oefeningenopdracht1.js";

function mostSoldFirst() {
    inventory.sort((a, b) => {
        return b.sold - a.sold;
    });

    console.log("Meest verkocht eerst", inventory);
}

function cheapestFirst() {
    inventory.sort((a, b) => {
        return a.price - b.price;
    });

    console.log("Goedkoopste eerst", inventory);
}

function bestForSportsFirst() {
    inventory.sort((a, b) => {
        return b.refreshRate - a.refreshRate;
    })

    console.log("Meest geschikt voor sport eerst", inventory);
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
                    <h2>Alle merken</h2>
                    <article>
                        <ul className="brand-list">
                            {inventory.map((tv) => {
                                return <li key={tv.type}>{tv.brand}</li>
                            })}
                        </ul>
                    </article>
                    <h2>Best verkochte tv</h2>
                    <article className="bestselling-tv-container">
                        <span className="tv-image">
                            <img src={bestSellingTv.sourceImg} alt="Onze best verkochte tv"/>
                        </span>
                        <div className="tv-info">
                            <h3>{getNameTV(bestSellingTv)}</h3>
                            <h3>{getPriceTV(bestSellingTv.price)}</h3>
                            <p>{getScreenSizes(bestSellingTv.availableSizes)}</p>
                            <ul className="tv-info-list">
                                <li><img src={check} alt="wel"/> wifi</li>
                                <li><img src={minus} alt="niet"/> speech</li>
                                <li><img src={check} alt="wel"/> hdr</li>
                                <li><img src={check} alt="wel"/> bluetooth</li>
                                <li><img src={minus} alt="niet"/> ambilight</li>
                            </ul>
                        </div>
                    </article>
                    <h2>Alle tvs</h2>
                    <button type="button" onClick={mostSoldFirst}>
                        Meest verkocht eerst
                    </button>
                    <button type="button" onClick={cheapestFirst}>
                        Goedkoopste eerst
                    </button>
                    <button type="button" onClick={bestForSportsFirst}>
                        Meest geschikt voor sport eerst
                    </button>
                    {inventory.map((tv) => {
                        return <article className="tv-container" key={tv.type}>
                            <span className="tv-image">
                            <img src={tv.sourceImg} alt="Afbeelding van de tv"/>
                            </span>
                            <div className="tv-info">
                                <h3>{getNameTV(tv)}</h3>
                                <h3>{getPriceTV(tv.price)}</h3>
                                <p>{getScreenSizes(tv.availableSizes)}</p>
                                <ul className="tv-info-list">
                                    {tv.options.map((option) => {
                                        if (option.applicable === true) {
                                            return <li key={option.name}>
                                                <img src={check} alt="wel"/>
                                                {option.name}
                                            </li>
                                        } else {
                                            return <li key={option.name}>
                                                <img src={minus} alt="niet"/>
                                                {option.name}
                                            </li>
                                        }
                                    })}
                                </ul>
                            </div>
                        </article>
                    })}
                </section>
            </main>
        </>
    )
}

export default App
