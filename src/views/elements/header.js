import styled from "styled-components";

function Header(props) {

let Header = styled.header`
    background-color: ${props.colores.color1};
    color:${props.colores.colorText1};
    padding: 1em 2vw;
    display: flex;
    justify-content: space-between;
`
  return (
    <Header>
        <div style={{display:"flex"}}>
            <div>
                <a href="/"><h1>OFERTJOBS</h1></a>
            </div>
            <div>
                <p>Buscar Empleo</p>
            </div>
            <div>
                <p>Buscar Empresas</p>
            </div>
        </div>
        <div style={{display:"flex"}}>
            <div>
                <p>Unete</p>
            </div>
            <div>
                <a href="/login"><p>Iniciar sesión</p></a>
            </div>
            <div>
                
                <p onClick={()=>{
                    props.changeMode();
                }}>DARKMODE</p>
            </div>
        </div>
    </Header>
  );
}

export default Header;
