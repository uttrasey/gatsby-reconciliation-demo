import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class Page extends React.Component {
  constructor(props) {
    super(props)
    console.log(
      `goal is for this to be called once only when flicking between 'a' to 'b'`
    )
  }

  render() {
    return (
      <div>
        <h1>
          Page that links to <b>{this.props.link}</b>
        </h1>
        <Link to={this.props.link || `/b`}>Goto B</Link>
      </div>
    )
  }
}

Page.defaultProps = {
  link: `/b`,
}

Page.propTypes = {
  link: PropTypes.string.isRequired,
}

export default Page
