import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0d1117; 
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 75px 15px;
  }
`