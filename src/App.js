import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./store/reducers/user";

import ErrorBoundary from "./components/Error-boundary";
import HeaderComponent from "./components/Header.Component";
import LoadingComponent from "./components/Loading.Component";

// component imported here
const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SignInPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CartPage = lazy(() => import("./pages/CartPage"));

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
