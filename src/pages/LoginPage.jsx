import React from "react";

const SignInComponent = () => {
  return (
    <section className="section mt-5">
      <div className="container has-text-centered ">
        <div className="columns is-centered">
          <div className="column is-5 is-4-desktop">
            <form>
              <div className="field">
                <div className="control">
                  <input className="input" type="email" placeholder="Email" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="field">
                <button className="button is-primary is-fullwidth">
                  Sign in!
                </button>
              </div>
              <a href="#">or sign in with Facebook</a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInComponent;
