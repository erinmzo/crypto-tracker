import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getCoins } from "../../apis/coinsApi";
import { CoinTypes } from "../../types/coins";
import Error from "../common/Error";
import Loading from "../common/Loading";

function Coins() {
  const {
    data: coins,
    isLoading,
    isError,
  } = useQuery<CoinTypes[]>({
    queryKey: "coins",
    queryFn: getCoins,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Container>
      <Header>
        <Title>Crypto-tracker</Title>
        <Description>This website to view Bitcoin price information.</Description>
      </Header>
      {coins && (
        <CoinsList>
          {coins.slice(0, 20).map(
            (coin) =>
              coin.is_active && (
                <Coin key={coin.id}>
                  <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                    <img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} alt={coin.name} />
                    {coin.name} &rarr;
                  </Link>
                </Coin>
              )
          )}
        </CoinsList>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 15px;
  max-width: 480px;
  margin: 0 auto;
  padding-bottom: 10vh;
`;

const Header = styled.header`
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 26px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-weight: bold;
`;

const Description = styled.p`
  color: "#ccc";
  font-size: 16px;
`;

const CoinsList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
`;

const Coin = styled.li`
  border-radius: 8px;
  color: ${(props) => props.theme.bgColor};
  a {
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
    transition: all 0.2s ease-in-out;
    border-radius: 8px;
    font-size: 14px;
    &:hover {
      background-color: lightyellow;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
      font-weight: bold;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;

export default Coins;
