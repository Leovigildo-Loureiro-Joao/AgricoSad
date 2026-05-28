import { Navigate } from 'react-router-dom';
import { useUserType } from '@/shared/hooks/useUserType';

function ProtectedRoute({ allowedRoles, children }) {
  const userType = useUserType();

  if (!userType) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userType)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default ProtectedRoute;
