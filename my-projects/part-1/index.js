// class Hello extends React.Component {
//   render() {
//     return <h1>Hello there!</h1>
//   }
// }

// function Hello() {
//   return (
//     <h1>Is this how you do it?</h1>
//   )
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Me" from="Yourself" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));