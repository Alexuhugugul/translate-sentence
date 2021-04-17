type THeaderProps = {
  children?: JSX.Element,
}

const Header = (props: THeaderProps) => {

  return (
    <header className="main-page__header">
      {props.children}
    </header>
  )
}

export default Header