import Header from '../elements/header';
import Item from '../elements/items';



function Home() {
    return (
        <>
            <Header />
            <section id="home">
                <div>
                    <h1>Encuentra el trabajo de tus sueños.</h1>
                    <div>
                    <input></input>
                    <input></input>
                    <button></button>
                        
                    </div>
                </div>
                
            </section>
            <section id="categories">
                <h1>Muchas empresas confian en nosotros</h1>
                <div id="findItem">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </section>
        </>

    );
}

export default Home;
