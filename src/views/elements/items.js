import img2 from '../../img/foto2.jpg'
import styled from '@emotion/styled'


let Items = styled.div`
    margin: 1em;
    width: 95%;
    height: 20em;
    box-shadow: 0px 0px 0px 1px rgb(32 32 32 / 25%);
    transition: 0.5s;
    &:hover{
        box-shadow: 0px 0px 9px 1px rgb(32 32 32 / 25%);
    }
`
let ItemInfo = styled.div`
    background:#fff;
    margin:1em;
`

let ItemDesc = styled.div`
    display:flex;
    justify-content:space-between; 
    margin:1em 2em;
`

let ImgItem = styled.div`
    height:100%;
    background: url(${img2});
    background-size:200%;
    background-position: bottom;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

function Item(props) {
    return (
        <Items>
            <ImgItem>
                <ItemInfo>
                    <h1>{props.title}</h1>
                        <ItemDesc>
                            <div>{props.jobs}{props.jobs !== 1 ? " ofertas"  : " oferta"} </div>
                            <div>Mirar todas</div>
                        </ItemDesc>
                </ItemInfo>
            </ImgItem>

        </Items>

    );
}

export default Item;