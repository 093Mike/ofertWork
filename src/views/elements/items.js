import img2 from '../../img/foto2.jpg'
import styled from '@emotion/styled'
import { useState } from 'react'


let Items = styled.div`
    margin: 1em;
    height: 20em;
    box-shadow: 0px 0px 0px 1px rgb(32 32 32 / 25%);
    transition: 0.5s;
    &:hover{
        box-shadow: 0px 0px 9px 1px rgb(32 32 32 / 25%);
    }
`
let ItemInfo = styled.div`
    padding:1em;
    background:rgb(255 255 255 / 40%);
    transition:0.2s;
    height:5em;
    color:#000;
    &:hover{
        height:100%;
        background:rgb(255 255 255 / 75%);
        

    }
`


let ItemOfert = styled.div`
    display:flex;
    justify-content:center; 
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
    const [isShown, setIsShown] = useState(false);

    return (
        <Items>
            <ImgItem>
                <ItemInfo
                    onMouseEnter={() => {setIsShown(true)}}
                    onMouseLeave={() => {setIsShown(false)}}
                >
                    <h1>{props.title}</h1>
                    <ItemOfert>
                        <div>{props.numJobs}{props.numJobs !== 1 ? " ofertas"  : " oferta"} </div>
                    </ItemOfert>
                </ItemInfo>
            </ImgItem>

        </Items>

    );
}

export default Item;