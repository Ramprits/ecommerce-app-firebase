import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./store/reducers/user";

import ErrorBoundary from "./components/ErrorBoundary";
import HeaderComponent from "./components/Header";
import LoadingComponent from "./components/loading";

// component imported here
const HomePage = lazy(() => import("./pages/home"));
const ContactPage = lazy(() => import("./pages/contact"));
const AboutPage = lazy(() => import("./pages/about"));
const SignInPage = lazy(() => import("./pages/login"));
const RegisterPage = lazy(() => import("./pages/register"));
const ProductPage = lazy(() => import("./pages/product"));
const CartPage = lazy(() => import("./pages/cart"));

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }
      dispatch(setCurrentUser(userAuth));
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <HeaderComponent />
      <Switch>
        <ErrorBoundary>
          <Suspense
            fallback={
              <LoadingComponent message="Please wait while loading..." />
            }
          >
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/products" component={ProductPage}></Route>
            <Route path="/cart" component={CartPage}></Route>
            <Route path="/contact" component={ContactPage}></Route>
            <Route
              path="/login"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInPage />
              }
            ></Route>
            <Route
              path="/register"
              render={() =>
                currentUser ? <Redirect to="/" /> : <RegisterPage />
              }
            ></Route>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  );
};
export default App;
