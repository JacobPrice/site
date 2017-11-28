import React from 'react'
import styled from 'styled-components'
const Box = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #08FDD8;
    border: 1px solid #08FDD8;
    font-style: italic;
    font-size: 1.1em;
`
export default class Logo extends React.Component {
 render() {
     const { height, width, color } = this.props
     return (
        <Box>JP</Box>
     )
 }
}