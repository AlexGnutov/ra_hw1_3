// import logo from './logo.svg';
import './App.css';
import CalendarFunc from "./calendar/calendar-func";

const now = new Date(1983, 1, 19);

function App() {
  return (
      <CalendarFunc date={now}/>
  );
}

export default App;
