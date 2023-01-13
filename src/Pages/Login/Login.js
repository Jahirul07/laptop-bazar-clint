import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, formState: {errors}, handleSubmit } = useForm();
//   const {signIn} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const onSubmit = (data) => {
    console.log(data)
//     setLoginError('');
//     signIn(data.email, data.password)
//     .then(result => {
//       const user = result.user;
//       console.log(user);
//       navigate(from, {replace: true});
//     })
//   .catch(err => {
//     console.error(err.message)
//     setLoginError(err.message);
//   });
  };
    return (
        <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center font-bold">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input type='text' 
            {...register("email", {required: "Email is requred"})} 
            className="input input-bordered w-full max-w-xs"/>
            {errors.email && <p className="text-red-500" role="alert">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input type='password' 
            {...register("password", {required: "Password is requred", minLength:{value: 8, message: 'Password must be 8 characters or longer'}})} 
            className="input input-bordered w-full max-w-xs"/>
            <label className="label">
              <span className="label-text font-bold">Forget your password?</span>
            </label>
            {errors.password && <p className="text-red-500" role="alert">{errors.password?.message}</p>}
          </div>
          <input className="btn btn-accent w-full" value="Login" type="submit" />
          <div>
            {loginError && <span className="text-red-600">{loginError}</span>}
          </div>
        </form>
        <p>New to Doctors Portal <Link className="text-secondary" to='/signup'>Create an Account</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
    );
};

export default Login;