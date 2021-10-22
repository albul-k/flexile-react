import { useContext, useEffect } from 'react';

// Material UI

// Utils
import { StateContext } from '../utils/stateProvider';


function Main() {
  // const classes = useStyles();
  // const { state } = useContext(StateContext);

  const {dispatch} = useContext(StateContext);
  // const handleClick = (click: IClick) => {
  //   dispatch(
  //     {type: 'setTitle', value: 'Main'}
  //   );
  // };
  // dispatch(
  //   {type: 'setTitle', value: 'Main'}
  // );

  useEffect(() => {
    dispatch({type: 'setTitle', value: 'Main view'});
  }, []);

  return (
    <div>Main view</div>
  );
}

export default Main;