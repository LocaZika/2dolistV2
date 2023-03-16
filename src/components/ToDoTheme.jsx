import '../scss/todotheme.scss';

export default function ToDoTheme(props) {
  const {darkTheme, setTheme} = props;
  let darkThemeState = darkTheme;
  const handleThemeClick = () => {
    darkThemeState = !darkThemeState;
    setTheme(darkThemeState);
  }
  return (
    <div className='todo-theme'>
      <h1>todo</h1>
      <button
        className={darkTheme === false ? 'dark' : 'light'}
        onClick={handleThemeClick}
      ></button>
    </div>
  )
}
