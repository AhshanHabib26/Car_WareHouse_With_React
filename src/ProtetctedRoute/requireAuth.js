// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';

// const requireAuth = ({children}) => {
//     let auth = useAuth();
//     let location = useLocation();
  
//     if (!auth.user) {
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }
//     return children;
// };

// export default requireAuth;