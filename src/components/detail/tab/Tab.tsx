import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

function Tab({ coinId, outlet }: { coinId: string; outlet: JSX.Element }) {
  const { pathname } = useLocation();
  const isChartActive = pathname.endsWith("chart");
  const isPriceActive = pathname.endsWith("price");

  return (
    <TabContainer>
      <TabList>
        <li>
          <TabLink to={`/${coinId}/chart`} $isActive={isChartActive}>
            Chart
          </TabLink>
        </li>
        <li>
          <TabLink to={`/${coinId}/price`} $isActive={isPriceActive}>
            Price
          </TabLink>
        </li>
      </TabList>
      <TabBox>{outlet}</TabBox>
    </TabContainer>
  );
}

const TabContainer = styled.div`
  width: 100%;
`;

const TabList = styled.ul`
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: space-between;
  li {
    width: 100%;
    a {
    }
  }
`;

const TabBox = styled.div`
  border: 1px solid ${(props) => props.theme.accentColor};
  width: 100%;
  padding: 20px 10px;
`;

const TabLink = styled(Link)<{ $isActive: boolean }>`
  display: block;
  width: 100%;
  padding: 10px 20px;
  background-color: ${({ $isActive }) => ($isActive ? "tomato" : "gray")};
  color: white;
  font-weight: bold;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  &:hover {
    color: white;
  }
`;
export default Tab;
