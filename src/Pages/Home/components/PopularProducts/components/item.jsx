import React from 'react'
import styled from 'styled-components'

const Item = () => {
    return (
        <Container>
            Item Component
        </Container>
    )
}

const Container = styled.div`
    width: 20%;
    background-color: black;
    height: 300px;
`

export default Item
