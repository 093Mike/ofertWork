import styled from '@emotion/styled';



function Pro(props) {
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

export default Login;
