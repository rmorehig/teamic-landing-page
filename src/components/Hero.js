import React from "react"
import styled from "styled-components"
import { PrimaryButton, OutlineButton } from "./Button"

const HeroWrapper = styled.section`
  position: relative;
  > div {
    max-width: 600px;
    text-align: center;
    padding: 148px 0 320px;
    margin: 0 auto;
  }
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
  justify-content: center;
  align-items: center;
  margin: 40px 0 24px;
  > button:first-child {
    margin-right: 21.5px;
  }
`
const HelperText = styled.p`
  font-size: 14px;
  line-height: 24px;
`

const Hero = () => {
  return (
    <HeroWrapper>
      <div>
        <H1>Supercharge your team flow</H1>
        <SubHeader>Unleash the full potential of your company</SubHeader>
        <Buttons>
          <PrimaryButton>Try for free</PrimaryButton>
          <OutlineButton>See pricing</OutlineButton>
        </Buttons>
        <HelperText>Fully featured 30 day free trial</HelperText>
      </div>
    </HeroWrapper>
  )
}

export default Hero
