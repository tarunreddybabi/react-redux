import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { buyTicket } from './redux/actions';
// import { profileDetails } from './redux/profile/action';
import HomeScreen from './screens/home-screen';

function App() {

  // const { totalTickets, filledTickets, unfilledTickets, blockedTickets } = useSelector((state) => state);

  // const ReduxStore=useSelector((state)=>state)
  // console.log(ReduxStore);

  // const dispatch = useDispatch();
  // const buyTicketFunction = () => {
  //   dispatch(buyTicket(1));
  // }

  // const fillDetails=()=>{
  //   dispatch(profileDetails({
  //     name:"Tarun",
  //     salary:20000
  //   }))
  // }

  return (
    <div >
     <HomeScreen/>
        {/* <h5> Total Tickets : {totalTickets} </h5>
        <h5> Filled Tickets : {filledTickets}</h5>
        <h5> Unfilled Tickets : {unfilledTickets} </h5>
        <h5> Blocked Tickets : {blockedTickets}</h5>
        <button onClick={buyTicketFunction}>Buy Ticket</button> 
        <button onClick={fillDetails} >Fill redux store</button>
        <h2>Profile: {ReduxStore.profile.name}</h2>*/}

     
    </div>
  );
}

export default App;
