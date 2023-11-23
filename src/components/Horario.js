import ScheludeTable from "./scheludeRe/ScheludeTable";

const Horario = ({username,setIsLoggedIn}) => {
  return(
    <ScheludeTable username={username} setIsLoggedIn={setIsLoggedIn}/>
  )
};

export default Horario;
