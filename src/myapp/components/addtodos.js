import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {getCollectedTopics} from './myaction'
import fetch from 'isomorphic-fetch'
import { Link} from 'react-router';
import style from'../../styles/index.css';


 const AddTodo = ({lost}) =>(
    <div>
         {console.log(lost)}
    </div>
 )



export default AddTodo
