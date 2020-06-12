import { useContext } from 'react';

import { AuthContext } from 'context-providers';

const useAuth = () => useContext(AuthContext);

export default useAuth;
