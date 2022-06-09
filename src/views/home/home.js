import Footer from '../elements/footer';
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
                    <Item title="Movistar" jobs={2} />
                    <Item title="Vodafone"  jobs={14}/>
                    <Item title="Bricomart"  jobs={1} />
                    <Item title="MediaMark"  jobs={7}/>
                    <Item title="MGA"  jobs={0}/>
                </div>
            </section>
            <Footer />
        </>

    );
}

export default Home;
