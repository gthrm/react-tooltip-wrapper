import Tooltip from './components/Tooltip'
import styled from "styled-components";

const tooltipTitle = 'Hello!'

function App() {
  return (
    <StyledWrapper>
      <Tooltip title={tooltipTitle}>
        <p>Hover to me!</p>
      </Tooltip>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`


export default App;
