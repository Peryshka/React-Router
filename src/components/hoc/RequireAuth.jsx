import {useLocation, Navigate} from 'react-router-dom'
import {UseAuth} from '../hook/UseAuth';

const RequireAuth = ({children}) => {
  const location = useLocation();
  const auth = false;
  const {user} = UseAuth();
  if(!user) {
    return <Navigate to='/login' state={{from:location}} />
  }
  return children;
};

export default RequireAuth;