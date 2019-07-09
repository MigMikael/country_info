import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Jumbotron, Row } from 'react-bootstrap';

function Country({ match }) {

    useEffect(() => {
        getCountry()
    }, [])

    const [country, setCountry] = useState([])

    const getCountry = async () => {
            const response = await axios.get(`https://restcountries.eu/rest/v2/name/${match.params.name}`)
            console.log(response.data[0])
            setCountry(response.data[0])
    }

    return (
        <Container >
            <Jumbotron fluid style={{textAlign: "center", marginTop: "1%"}}>
                <Container>
                    <h1>{country.name}</h1>
                    <p>
                        {country.nativeName}
                    </p>
                    <img src={country.flag} />
                </Container>
            </Jumbotron>
        </Container>
    )
}

export default Country