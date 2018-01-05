import React, { Component } from 'react'

class SignIn extends Component {
  render() {
    return (
      <section className="hero is-fullheight SignIn">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h5 className="title is-5 has-text-grey">Συνδεθείτε για να συνεχίσετε.</h5>
              <div className="box">
                <figure className="avatar">
                  <img src="https://placehold.it/128x128" />
                </figure>
                <form>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large is-large has-text-centered"
                        type="email"
                        placeholder="Το email σας"
                        autoFocus=""
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large has-text-centered"
                        type="password"
                        placeholder="Ο κωδικός σας"
                      />
                    </div>
                  </div>
                  {/* <div className="field">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div> */}
                  <a className="button is-block is-info is-large">Σύνδεση</a>
                </form>
              </div>
              {/* <p className="has-text-grey">
                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                <a href="../">Need Help?</a>
              </p> */}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SignIn
