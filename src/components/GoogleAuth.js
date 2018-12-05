import React, { Component } from "react"

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "653800338113-gd1h3v4j2f2d08f5j8upqqo90fuslh9g.apps.googleusercontent.com",
        scope: "email"
      })
    })
  }

  render() {
    return <div>Google</div>
  }
}

export default GoogleAuth
