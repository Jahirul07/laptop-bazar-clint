// import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
//   const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
//   const googleProvider = new GoogleAuthProvider();

  const onSubmit = (data) => {
    console.log(data);
    // setSignUpError("");
    // createUser(data.email, data.password)
    //   .then((result) => {
    //     const user = result.user;
    //     console.log(user);
    //     toast.success("User Created Successfully");
    //     const userInfo = {
    //       displayName: data.name,
    //     };
    //     updateUser(userInfo)
    //       .then(() => {})
    //       .catch((err) => console.error(err));
    //   })
    //   .catch((err) => {
    //     console.error(err.message);
    //     setSignUpError(err.message);
    //   });
  };
//   const handleGoogleSignIn = () => {
//         signInWithGoogle(googleProvider)
//         .then(result => {
//           console.log(result)
//         })
//         .catch(error => console.log(error))
//   }
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "name is requred" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "email is requred",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is requred",
                minLength: {
                  value: 8,
                  message: "Password must be 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: "Password must be storng",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-4"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <span className="text-red-600">{signUpError}</span>}
        </form>
        <p>
          Already have an Account{" "}
          <Link className="text-secondary" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        {/* <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button> */}
      </div>
    </div>
  );
};

export default SignUp;
