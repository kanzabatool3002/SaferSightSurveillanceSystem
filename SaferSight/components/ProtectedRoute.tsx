import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/Login'); // Redirect to Login if not logged in
    }
  }, [isLoggedIn]);

  // Render children only if logged in
  if (!isLoggedIn) {
    return null;
  }

  return <>{children}</>;
}
