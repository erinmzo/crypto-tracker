import { useParams } from "react-router-dom";
import styled from "styled-components";
import { usePriceData } from "../../../hooks/usePriceData";
import Error from "../../common/Error";
import Loading from "../../common/Loading";

function Price() {
  const { coinId } = useParams();
  if (!coinId) return null;

  const { price, isLoading, isError } = usePriceData(coinId);

  const nowDate = new Date();
  const now = nowDate.toISOString().replace(/[A-Z]/g, " ").trim().slice(0, 19);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  console.log(price);
  return (
    <PriceContainer>
      <li>
        <div>
          <h5>현재 가격:</h5>
          <span>{now}</span>
        </div>
        <PriceValue>{price?.quotes.USD.price.toFixed(2).toLocaleLowerCase()}</PriceValue>
      </li>
      <li>
        <div>
          <h5>최고가 달성:</h5>
          <span>{price?.quotes.USD.ath_date.replace(/[A-Z]/g, " ").trim()}</span>
        </div>
        <PriceValue>{price?.quotes.USD.ath_price.toFixed(2).toLocaleString()}</PriceValue>
      </li>
      <li>
        <h5>1시간 전보다</h5>
        <PriceValue>{price?.quotes.USD.percent_change_1h.toFixed(2).toLocaleString() + "%"}</PriceValue>
      </li>
      <li>
        <h5>6시간 전보다</h5>
        <PriceValue>{price?.quotes.USD.percent_change_6h.toFixed(2).toLocaleString() + "%"}</PriceValue>
      </li>
      <li>
        <h5>12시간 전보다</h5>
        <PriceValue>{price?.quotes.USD.percent_change_12h.toFixed(2).toLocaleString() + "%"}</PriceValue>
      </li>
      <li>
        <h5>24시간 전보다</h5>
        <PriceValue>{price?.quotes.USD.percent_change_24h.toFixed(2).toLocaleString() + "%"}</PriceValue>
      </li>
      <li>
        <h5>7일 전보다</h5>
        <PriceValue>{price?.quotes.USD.percent_change_7d.toFixed(2).toLocaleString() + "%"}</PriceValue>
      </li>
      <li>
        <h5>30일 전보다</h5>
        <PriceValue>{price?.quotes.USD.percent_change_30d.toFixed(2).toLocaleString() + "%"}</PriceValue>
      </li>
    </PriceContainer>
  );
}
const PriceContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 0;
  li {
    padding: 10px 15px;
  }
  li:first-child,
  li:nth-child(2) {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
  }

  h5 {
    font-size: 0.8rem;
    color: ${(props) => props.theme.accentColor};
  }
  span {
    font-size: 0.8rem;
    color: gray;
  }
`;

const PriceValue = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
`;
export default Price;
