import { useQuery } from "react-query";
import styled from "styled-components";
import { getPriceInfo } from "../../apis/coinApi";
import Error from "../common/Error";
import Loading from "../common/Loading";

function PriceInfo({ coinId }: { coinId: string }) {
  const {
    data: price,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["price", coinId],
    queryFn: () => getPriceInfo(coinId),
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  if (!price) return null;
  return (
    <InfoContainer>
      <li>
        <h5>TOTAL SUPLY:</h5>
        <span>{price.total_supply.toLocaleString()}</span>
      </li>
      {price.max_supply !== 0 && (
        <li>
          <h5>MAX SUPLY:</h5>
          <span>{price.max_supply}</span>
        </li>
      )}
    </InfoContainer>
  );
}
const InfoContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  border-top: 1px solid ${(props) => props.theme.accentColor};
  padding-top: 20px;
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

export default PriceInfo;
