import Title from "../atoms/title";
import styled from 'styled-components';
import { THeaderProps } from "../../types";

const Header = styled.header`
  height: 25%;
  text-align: center;

@media ${props => props.theme.media.desktop}{
  height: 10%;
}
`;

const HeaderComponent: React.FC<THeaderProps> = (props) => {
  const { translationText } = props;

  return (
    <Header >
      <Title>Переведите данное предложение:<br />{translationText}</Title>
    </Header>
  )
}

export default HeaderComponent