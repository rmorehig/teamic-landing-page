import styled from "styled-components"
import { fontFamily } from "../theme/typography"
import { primary, lightGray, black, darkPrimary } from "../theme/colors"
import { outline } from "../theme/mixins"

export const Button = styled.button`
  font-family: ${fontFamily};
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  border-radius: 8px;
  padding: 16px 32px;
  transition: all 300ms ease;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`

export const PrimaryButton = styled(Button)`
  background-color: ${primary};
  color: ${lightGray};
  ${outline(3, primary)}
  &:hover {
    ${outline(3, darkPrimary)}
    background-color: ${darkPrimary};
  }

`

export const OutlineButton = styled(Button)`
  ${outline(3, black)}
  &:hover {
    background-color: ${black};
    color: ${lightGray};
  }
`
