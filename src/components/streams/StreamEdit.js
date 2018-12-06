import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchStream } from "../../actions"

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    return <div>{this.props.stream.title}</div>
  }
}

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id

  return { stream: state.streams[streamId] }
}

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit)
