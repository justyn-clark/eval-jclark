import styled from 'styled-components'

const Checkbox = styled.input`
  width: 25px;
  height: 25px;
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 1rem;
  position: relative; 
  text-decoration: none;
  cursor: pointer;
  -webkit-appearance: none;
  margin: 0.5rem 1rem 0 0;
  &:checked { 
    color: black;    
    &:after {
      content: '✓';
      left: 12px;
      position: absolute;
      top: 11px;
    }
  }
  &:focus, :hover {
    outline: none;
  }  
`

export default Checkbox
