import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../store/authSlice";
import { useNavigation } from '@react-navigation/native';

function useProtectedRoute({ isProtected, }) {
    const navigation = useNavigation();
    // Check if route is protected
    if (!isProtected) {
        return;
    }
    // Check if user is authenticated
    const isAuthenticated = useSelector(selectIsAuthenticated);
    useEffect(() => {
        if (!isAuthenticated) {
            navigation.navigate('Login');
        }
        // return () => {
        //     console.log("Cleanup function");
        // };
    }, [isAuthenticated]);
}

export default useProtectedRoute;