import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { Link} from 'react-router';



 const AddTodo = ({lost,myclick}) =>(
       <button onClick={myclick} className='onebuton'>{lost}</button>
 )


export default AddTodo