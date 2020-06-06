import React from "react"
import styled from "styled-components"
import { PrimaryButton } from "./Button"

const HeroWrapper = styled.section`
  margin: 0 auto;
  max-width: 600px;
`
const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 90px;
  letter-spacing: -1.4px;
  margin-bottom: 24px;
`
const SubHeader = styled.p`
  font-size: 28px;
  line-height: 40px;
  letter-spacing: -0.4px;
`
const Buttons = styled.div`
  display: flex;
`

const Hero = () => {
  return (
    <HeroWrapper>
      <H1>Supercharge your team flow</H1>
      <SubHeader>Unleash the full potential of your company</SubHeader>
      <Buttons>
        <PrimaryButton>Try for free</PrimaryButton>
        <PrimaryButton>See pricing</PrimaryButton>
      </Buttons>
    </HeroWrapper>
  )
}

export default Hero
