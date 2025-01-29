import './App.css';
import calculateSoldTVs from "./helpers/calculateSoldTVs.js";
import calculateOriginalStock from "./helpers/calculateOriginalStock.js";
import calculateTVsToSell from "./helpers/calculateTVsToSell.js";


function App() {
    return (
        <>
            <main className="main-container">
                <h1>Tech It Easy Dashboard</h1>
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
                </section>
            </main>
        </>
    )
}

export default App
