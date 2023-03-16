import bgLight from '../img/bg-light.jpg';
import bgDark from '../img/bg-dark.jpg';
import '../scss/header.scss';

export default function Header(props) {
  const isDarkTheme = props.darkTheme;
  return (
    <header>
      <div className="header-bg" style={
        isDarkTheme === false ?
          {backgroundImage: `url(${bgLight})`} :
          {backgroundImage: `url(${bgDark})`}
      }></div>
    </header>
  )
}
