import styled from "styled-components"
import { fontFamily } from "theme"

export const Button = styled.button`
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  padding: 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;
  background: none;
  border: none;
  cursor: pointer;
`

export const PrimaryButton = styled(Button)`
  background-color: ${colors};
  color: ${white};
`
