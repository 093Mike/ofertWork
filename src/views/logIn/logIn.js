import styled from '@emotion/styled';
import Footer from '../elements/footer';
import Header from '../elements/header';
import imgFondo from '../../img/foto1.jpg'

let LogInSection = styled.section`
    height: 90vh;
    background-image: url(${imgFondo});
    display: flex;
    justify-content: center;
    align-content: left;
    flex-direction: column;
    align-items: left;
    padding: 0 20em;
`


let H1C = styled.h1`
    font-size:40px;
`

let Log = styled.div`
    background-color:#fff;
    width: 30em;
    height: auto;
    box-shadow: 0px 0px 0px 1px rgb(32 32 32 / 25%);
    transition: 0.5s;
    text-align:left;
    display:flex;
    flex-direction:column;
    padding:20px;
    &:hover{
        box-shadow: 10px 7px 18px 1px rgb(32 32 32 / 75%)
    }
`
let Labels = styled.label`

`

let Input = styled.input`
    width:70%;
    font-size:18px;
    margin: 0 0 5px;
`




function Login(props) {

    let Submit = styled.div`
        width:6em;
        margin:20px 0;
        padding:10px;
        color:${props.colores.colorText1} ;
        background-color:${props.colores.color1}
    `

    return (
        <>
            <Header colores={props.colores} changeMode={props.changeMode} />
            <LogInSection>
                <H1C>Inicia sesión</H1C>
                <Log>
                    <Labels>Correo</Labels>
                    <Input type={"email"}></Input>
                    <Labels>Contraseña</Labels>
                    <Input type={"password"}></Input>
                    <Submit>Iniciar sesión</Submit>
                </Log>
            </LogInSection>
            <Footer/>
        </>

    );
}

export default Login;
