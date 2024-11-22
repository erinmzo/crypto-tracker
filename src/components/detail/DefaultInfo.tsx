import styled from "styled-components";
import { InfoData } from "../../types/coin";

function DefaultInfo({ info }: { info: InfoData }) {
  return (
    <InfoContainer>
      <li>
        <h5>RANK:</h5>
        <span>{info.rank}</span>
      </li>
      <li>
        <h5>SYMBOL:</h5>
        <span>{info.symbol}</span>
      </li>
      <li>
        <h5>OPEN SOURCE:</h5>
        <span>{info.open_source ? "YES" : "NO"}</span>
      </li>
    </InfoContainer>
  );
}

const InfoContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    h5 {
      font-size: 0.8rem;
      color: ${(props) => props.theme.accentColor};
    }
    span {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`;

export default DefaultInfo;
