import styled from "styled-components"
import { fontFamily } from "../theme/typography"
import { primary, lightGray } from "../theme/colors"
import { outline } from "../theme/mixins"

export const Button = styled.button`
  font-family: ${fontFamily};
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  border-radius: 8px;
  padding: 20px 37px;
  transition: all 300ms ease;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`

export const PrimaryButton = styled(Button)`
  background-color: ${primary};
  color: ${lightGray};
`

export const OutlineButton = styled(Button)`
  ${outline(3)}
`
