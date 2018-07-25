import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllProducts from './allProducts'
import {Jumbotron} from 'react-bootstrap'
import ChangePassword from './ChangePassword'
console.log(ChangePassword)

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  const username = email.split('@')[0]

  return (
    <div>
      <Jumbotron>
        <h3>Welcome, {username}</h3>
        <h4> Email: {email}</h4>
        <br />
        <h4> Change Password</h4>
        <ChangePassword email={email}/>
      </Jumbotron>
      <AllProducts />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
