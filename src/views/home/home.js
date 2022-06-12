import styled from '@emotion/styled'
import Footer from '../elements/footer';
import Header from '../elements/header';
import Item from '../elements/items';
import Search from '../elements/search';


let FormDiv = styled.div`
background-color: rgba(153, 135, 135, 0.65);
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`



function Home(props) {
    let TitleH1 = styled.h1`
    color:${props.colores.colorTextBlack};
    font-size: xxx-large;
    font-size: -webkit-xxx-large;
    `
    let SectionCategories = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1em 0;
    text-align: center;
    align-items: center;
    background-color: ${props.colores.backgroundWhite};
    color: ${props.colores.colorTextWhite};
    `


    return (
        <>
            <Header colores={props.colores} changeMode={props.changeMode} />
            <section id="home">
                <FormDiv>
                    <TitleH1>Encuentra el trabajo de tus sueños.</TitleH1>
                    <Search colores={props.colores} />
                </FormDiv>
                
            </section>
            <SectionCategories id="categories">
                <h1>Muchas empresas confian en nosotros</h1>
                <div id="findItem">
                    <Item title="Movistar" numJobs={2} colores={props.colores} />
                    <Item title="Vodafone" numJobs={14} colores={props.colores} />
                    <Item title="Bricomart" numJobs={1} colores={props.colores} />
                    <Item title="MediaMark" numJobs={7} colores={props.colores} />
                    <Item title="MGA" numJobs={0}  colores={props.colores} />
                </div>
            </SectionCategories>
            <Footer />
        </>

    );
}

export default Home;
