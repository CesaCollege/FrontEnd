import { useState } from "react";
import {useFormik} from "formik"
import * as Yup from 'yup' ;

const initialValues = {
    name:"",
    password:"",
    passwordConfirm:"",
    email: "",
    phoneNumber : ""
}

const validate = (values) =>{
    let error = {} ;
    if (!values.name) {
        error.name =  ' Name is Requierd'
    }if (!values.email) {
        error.email =  ' email is Requierd'
    }
    if (!values.password) {
        error.password =  ' password is Requierd'
    }
    console.log(error);
    return
}

const validationSchema = Yup.object({
    name : Yup.string().required('Name is requierd').min(6,"Name length is not valid"),
    email : Yup.string().email('Invalid email format').required('email is requierd'),
    password : Yup.string().required('password is requierd'),
    passwordConfirm: Yup.string().required('password confirm is requierd').oneOf([Yup.ref("password"),null],"password must match"),
    phoneNumber: Yup.string().required("phone number is requierd").matches(/^[0-9]{11}$/,"")
})

const SignUpForm = () => {
    
    const formik = useFormik({Invalid phone Number
        initialValues : initialValues,
        onSubmit: (values) => console.log(values),
        validationSchema 

    });

    
    // const [userData,setUserData] = useState({
    //     name:"",
    //     email:"",
    //     password:""
    // })

    // const changeHandler = (e) =>{
    //     setUserData({...userData,[e.target.name]:e.target.value})
    //     console.log(userData);
    // }

    // const submitHandler = (e) =>{
    //     e.preventDefault();
    //     console.log('function submit clicked');
    // }

    
    
    return (
        <div className="signUpForm">
            <form onSubmit={formik.handleSubmit} >
                <div className="formControl">
                    <label  >Name</label>
                    <input type="text"  name="name" {...formik.getFieldProps("name")} />
                    {formik.errors.name && formik.touched.name && (<div className="error">{formik.errors.name}</div>)}
                </div>
                <div className="formControl">
                    <label >Email</label>
                    <input  name="email" {...formik.getFieldProps("email")}   />
                    {formik.errors.email && <div className="error">{formik.errors.email}</div>}
                </div>
                <div className="formControl">
                    <label>phoneNumber</label>
                    <input type="text" name="phoneNumber" {...formik.getFieldProps("phoneNumber")} />
                    {formik.errors.phoneNumber && <div className="error">{formik.errors.phoneNumber}</div> }
                </div>
                <div className="formControl">
                    <label >Password</label>
                    <input  name="password"  {...formik.getFieldProps("password")}   />
                    {formik.errors.password && <div className="error">{formik.errors.password}</div>}
                </div>
                <div className="formControl">
                    <label >PasswordConfirm</label>
                    <input  name="passwordConfirm"  {...formik.getFieldProps("passwordConfirm")}   />
                    {formik.errors.passwordConfirm && <div className="error">{formik.errors.passwordConfirm}</div>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
 
export default SignUpForm;