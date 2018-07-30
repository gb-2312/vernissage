import React from 'react'
import styled from 'react-emotion'
import { renderPaintings } from './paintings'
import { renderStartingPoint } from './startingPoint'

export const Overlay = props => (
    <Container>
        {renderPaintings(props)}
        {renderStartingPoint(props)}
    </Container>
)

const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
`