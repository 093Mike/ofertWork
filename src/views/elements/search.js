import styled from '@emotion/styled'

let Labels = styled.div`
    display:flex;
    flex-direction:column;
    flex:2;
    margin: 0 2em;
`

let SubmitDiv = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    width:min-content;
    align-items: center;
    height:100%;
    
`

let Submit = styled.div`
    width:min-content;
    height:100%;
    font-size: x-large;
    background-color:aquamarine;
    padding:1em 2em;
    cursor:pointer;

`

let Forms = styled.div`
    background-color: #fff;
    width: 60vw;
    height: auto;
    display: flex;
    padding: 1em;
    justify-content: left;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-around;

`

let Input = styled.input`
    font-size:22px;
`


function Search() {
    return (
        <Forms>
            <Labels>
                <label>Empleo</label>
                <Input></Input>
            </Labels>
            <Labels>
                <label>Localidad</label>
                <Input></Input>
            </Labels>
            <SubmitDiv>
                <Submit>Buscar</Submit>
            </SubmitDiv>

        </Forms>


    );
}

export default Search;