import styled from "styled-components";

function Loading() {
  return <Loader>Loading</Loader>;
}

const Loader = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loading;
