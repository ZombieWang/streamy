import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchStream, editStream } from "../../actions"
import StreamForm from "./StreamForm"

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = formValues => {
    console.log(formValues)
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={this.props.stream}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id

  return { stream: state.streams[streamId] }
}

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit)
