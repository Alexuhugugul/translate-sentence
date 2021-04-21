import Title from "../atoms/title";
import styled from 'styled-components';

type THeaderProps = {
  translationText: any
}
const Header = styled.header`
  height: 25%;
  text-align: center;

@media ${props => props.theme.media.desktop}{
  height: 10%;
}
`;

const HeaderComponent = (props: THeaderProps) => {
  const { translationText } = props;

  return (
    <Header >
      <Title>Переведите данное предложение:<br />{translationText}</Title>
    </Header>
  )
}

export default HeaderComponent