import styled from "styled-components";

type THeaderProps = {
  children?: JSX.Element,
}

const HeaderWrapper = styled.header`
height: 25%;
@media (min-width: 760px) {
    height: 10%;
}
`;
const Header = (props: THeaderProps) => {

  return (
    <HeaderWrapper >
      {props.children}
    </HeaderWrapper>
  )
}

export default Header