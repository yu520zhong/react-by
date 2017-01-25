import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { Link} from 'react-router';



 const AddTodo = ({lost}) =>(
    <div>
       <button className='onebuton'>提交</button>
       <button className='onebuton'>{lost}</button>
    </div>
 )



export default AddTodo