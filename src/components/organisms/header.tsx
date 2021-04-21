import Header from "../molecules/header";
import { THeaderProps } from "../../types";

const HeaderBlock: React.FC<THeaderProps> = (props) => {
  const { translationText } = props;

  return (
    <Header translationText={translationText} />
  )
}

export default HeaderBlock