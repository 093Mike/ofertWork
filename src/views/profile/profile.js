//import styled from '@emotion/styled';
import Footer from '../elements/footer';
import Header from '../elements/header';



function Profile(props) {
    return (
        <>
            <Header colores={props.colores} changeMode={props.changeMode} />
            <Footer/>
        </>

    );
}

export default Profile;
