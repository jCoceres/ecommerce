import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: linear-gradient(135deg, #e8d5ff 0%, #d4b5ff 50%, #c29dff 100%);
  color: #2d1b4e;
  text-align: center;
  padding: 2.5rem 0;
  margin-top: auto;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`

const FooterText = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  opacity: 0.9;
`

const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>&copy; 2025 Mi tienda online</FooterText>
    </StyledFooter>
  )
}

export default Footer