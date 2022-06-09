import img2 from '../../img/foto2.jpg'
import styled from '@emotion/styled'

let ImgItem = styled.div`
    background: url(${img2});
    background-size:100%;
    background-position: bottom;
    background-repeat: no-repeat;
`;

function Item() {
    return (
        <div id="item">
            <ImgItem />
            <h1>Movistar</h1>
        </div>

    );
}

export default Item;