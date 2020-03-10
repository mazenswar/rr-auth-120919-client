import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Pages';
import Nav from './Components/Nav';
import { connect, useSelector, useDispatch } from 'react-redux';

// class App extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <Router>
//         <Nav />
//         <Routes />
//       </Router>
//     );
//   }
// }

// const mapStateToProps = state => state;

// export default connect(mapStateToProps)(App);

export default function App() {
  const dogs = useSelector(state => state.dogs);
  const dispatch = useDispatch();
  console.log('doggos from the store =========> ', dogs);
  useEffect(() => {
    fetch('http://localhost:3000/dogs')
      .then(r => r.json())
      .then(dogs => {
        const action = {
          type: 'SET_DOGS',
          payload: dogs
        };
        dispatch(action);
      });
  }, []);

  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}
