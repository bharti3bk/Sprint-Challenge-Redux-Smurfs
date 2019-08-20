import React from 'react'
import { connect } from 'react-redux'
import { withFormik, Form, Field } from "formik";
import { addSmurf } from '../actions'

function SmurfForm() {
    return (
        <Form className="ui form" id="formikForm">
            <div className="field">
                <label id="name">Name</label>
                <Field type="text" name="name" placeholder="name" />
            </div>
            <div className="field">
                <label id="age">Age</label>
                <Field type="text" name="age" placeholder="age" />
            </div>
            <div className="field">
                <label id="height">Height</label>
                <Field type="text" name="height" placeholder="height" />
            </div>
            <button className="ui button" type="submit">Submit</button>
        </Form>
    )
}

const SmurfFormikForm = withFormik({
    mapPropsToValues({name , age, height}){
        return {
          name: name || "",
          age: age || 0,
          height: height || 0
        }
    }, 
     handleSubmit(values, {props,resetForm}){
        props.addSmurf(values)
        resetForm();
       }
     }
    )(SmurfForm)

export default connect(null, {addSmurf})(SmurfFormikForm)
