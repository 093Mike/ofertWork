
function Header() {
  return (
    <header>
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
        </div>

    </header>
  );
}

export default Header;
