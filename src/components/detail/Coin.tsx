import { useQuery } from "react-query";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import { getCoinInfo } from "../../apis/coinApi";
import Error from "../common/Error";
import Loading from "../common/Loading";
import DefaultInfo from "./DefaultInfo";
import Description from "./Description";
import PriceInfo from "./PriceInfo";
import Tab from "./tab/Tab";

function Coin() {
  const { coinId } = useParams();

  if (!coinId) return null;

  const {
    data: info,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coin", coinId],
    queryFn: () => getCoinInfo(coinId),
    enabled: !!coinId,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  if (!info) return null;

  return (
    <Container>
      <Link to="/">&lt; Back</Link>
      <Header>{info?.name && <Title>{info.name}</Title>}</Header>
      <DetailContainer>
        <DefaultInfo info={info} />
        <PriceInfo coinId={coinId} />
        {info.description && <Description desc={info.description} />}
        <Tab coinId={coinId} outlet={<Outlet context={{ coinId }} />} />
      </DetailContainer>
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

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`;

export default Coin;
