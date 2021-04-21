import Header from "../molecules/header";

type THeaderProps = {
  translationText: any
}


const HeaderBlock = (props: THeaderProps) => {
  const { translationText } = props;

  return (
    <Header translationText={translationText}/>
  )
}

export default HeaderBlock