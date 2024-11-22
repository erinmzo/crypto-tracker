import styled from "styled-components";
import useToggle from "../../hooks/useToggle";

function Description({ desc }: { desc: string | undefined }) {
  const { isOpen, handleIsToggle } = useToggle();

  return (
    <div>
      <DescButton onClick={handleIsToggle}>- Description Toggle</DescButton>
      {isOpen && <DescBox>{desc}</DescBox>}
    </div>
  );
}

const DescButton = styled.h5`
  border: 0 none;
  background-color: transparent;
  font-size: 0.8rem;
  color: ${(props) => props.theme.accentColor};
  padding: 0 0;
  cursor: pointer;
`;

const DescBox = styled.p`
  margin-top: 10px;
  font-size: 14px;
  padding: 20px 15px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  $isToggle: ${(props) => props.theme.accentColor};
`;

export default Description;
