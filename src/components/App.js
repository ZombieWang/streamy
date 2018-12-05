import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

const PageOne = () => {
  return (
    <div>
      Page1
      <a href="/pagetwo">Navigate to Page Two</a>
    </div>
  )
}

const PageTwo = () => {
  return (
    <div>
      Page2<a href="/">Navigate to Page One</a>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
