import React from "react"
import styled from "styled-components"
import Illustration from "../assets/Illustration"
import { lightGray } from "../theme/colors"

const FeatureWrapper = styled.section`
  background: ${lightGray};
  > div {
    margin: 0 auto;
    text-align: center;
    max-width: 850px;
    padding: 180px 0;
  }
`
const H2 = styled.h1`
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.8px;
  margin-bottom: 16px;
`
const SubHeader = styled.p`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 16px;
`

const Feature = () => {
  return (
    <FeatureWrapper>
      <div>
        <H2>Discover new ways to engage with your team and grow together</H2>
        <SubHeader>
          Keep your priorities straight and your goals in sight.
        </SubHeader>
        <Illustration />
      </div>
    </FeatureWrapper>
  )
}

export default Feature
