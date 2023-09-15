import React from 'react'
import styled from 'styled-components'
import {Container} from "@/components/custom/Container"
import {Heading} from "@/components/base/Typography"
import {colors} from "@/assets"
import { schoolTypes } from '@/utils/constants'

const ElementContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

const Element = styled.div`
display: flex;
justify-content: center;
margin: 10px;
padding: 20px;
max-width: 152px;
`


const index = () => {
  return (
    <Container style={{backgroundColor: `${colors.ternary}, padding: "80px"`}}>
        <Heading>Pick your school type to get started</Heading>
        <ElementContainer>
            {schoolTypes.map((ele)=><Element>{ele}</Element>)}
        </ElementContainer>
    </Container>
  )
}

export default index