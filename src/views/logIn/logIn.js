import styled from '@emotion/styled';
import Footer from '../elements/footer';
import Header from '../elements/header';

let Log = styled.div`
    background-color:#fff;
    width: 60%;
    height: 20em;
    box-shadow: 0px 0px 0px 1px rgb(32 32 32 / 25%);
    transition: 0.5s;
    text-align:center;
    display:flex;
    flex-direction:column;
    &:hover{
        box-shadow: 10px 7px 18px 1px rgb(32 32 32 / 75%)
    }
`

function Home(props) {
    return (
        <>
            <Header colores={props.colores} changeMode={props.changeMode} />
            <section id="logIn">
                <Log>
                    <h1>Log In</h1>
                    <input></input>
                    <input></input>
                    <div></div>
                </Log>
            </section>
            <Footer/>
        </>

    );
}

export default Home;
