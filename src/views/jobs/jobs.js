import styled from '@emotion/styled';
import Firebase from '../../config/firebase';
import Footer from '../elements/footer';
import Header from '../elements/header';
import Search from '../elements/search';



let Filter = styled.div`
flex:1;
`

let ViewJobs = styled.div`
flex:4;
`


function Jobs(props) {

    let SectionJobs = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 1em 3em;
    text-align: center;
    align-items: center;
    background-color: ${props.colores.backgroundWhite};
    color: ${props.colores.colorTextWhite};
    `
    
    let queryJobs = () =>{
        let f = new Firebase();
        let jobs = f.firebaseDB.collection(f.firebaseDBGet,"jobs");
        jobs = f.firebaseDB.getDocs(jobs);
        console.log(jobs);
        //console.log(jobs.docs.map(doc=>doc.data()));
        //return jobs.docs.map(doc=>doc.data());
    }

    return (
        <>
            <Header colores={props.colores} changeMode={props.changeMode} />
            <section>
                <Search  colores={props.colores}/>
            </section>
            <SectionJobs>
                <Filter>fewfe</Filter>
                <ViewJobs>{queryJobs()}</ViewJobs>
            </SectionJobs>
            <Footer/>
        </>

    );
}

export default Jobs;
