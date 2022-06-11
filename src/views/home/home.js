import styled from '@emotion/styled'
import Footer from '../elements/footer';
import Header from '../elements/header';
import Item from '../elements/items';
import Search from '../elements/search';

let TitleH1 = styled.h1`
color: #fff;
font-size: xxx-large;
font-size: -webkit-xxx-large;
`

let FormDiv = styled.div`
    background-color: rgba(153, 135, 135, 0.65);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

function Home() {


    return (
        <>
            <Header />
            <section id="home">
                <FormDiv>
                    <TitleH1>Encuentra el trabajo de tus sueños.</TitleH1>
                    <Search />
                </FormDiv>
                
            </section>
            <section id="categories">
                <h1>Muchas empresas confian en nosotros</h1>
                <div id="findItem">
                    <Item title="Movistar" numJobs={2} />
                    <Item title="Vodafone" numJobs={14} />
                    <Item title="Bricomart" numJobs={1} />
                    <Item title="MediaMark" numJobs={7} />
                    <Item title="MGA" numJobs={0}  />
                </div>
            </section>
            <Footer />
        </>

    );
}

export default Home;
