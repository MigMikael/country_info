import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Col, CardDeck, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function CountryList() {

    useEffect(() => { getCountries() }, [])

    const [countries, setCountries] = useState([])

    const getCountries = async () => {
        const res = await axios.get(`https://restcountries.eu/rest/v2/all`)
        console.log(res.data)
        setCountries(res.data)
    }

    return (
        <CardDeck>
            {countries.map(country => (
                <Col md={4} key={country.name} style={{paddingBottom: "2%"}}>
                    <Link to={`/country/${country.name}`}>
                        <Card>
                            <Card.Img variant="top" src={country.flag} />
                            <Card.Body>
                                <Card.Title>{country.name}</Card.Title>
                                <Card.Text>
                                    {country.nativeName}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{textAlign: "center"}}>
                                <Button variant={"outline-secondary"} block>View</Button>
                            </Card.Footer>
                        </Card>
                    </Link>
                </Col>
            ))} 
        </CardDeck>         
    )
}

export default CountryList