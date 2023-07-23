import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

type Inputs = {
  email: string;
  password: string;
};

type ResponseError = {
  error: {
    message: string;
  };
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });

  const [ResponseError, setResponseError] = useState<ResponseError>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });
      console.log(response.data);

      //save token in local storage
      localStorage.setItem("token", response.data.token);
      //redirect to home page
      window.location.href = "/";
    } catch (error: any) {
      setResponseError(error.response.data);
    }
  };

  // TODO: add error message
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
      <h1 className="font-bold text-2xl mb-10 ">Welcome Back :)</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
      >
        <label className="font-semibold text-xs" htmlFor="usernameField">
          Email
        </label>
        <input
          {...register("email", { required: true })}
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="text"
        />
        <span className={`text-red-500 text-xs my-1 self-end ${!errors.email && 'opacity-0'}`}>
          This field is required
        </span>
        <label className="font-semibold text-xs" htmlFor="passwordField">
          Password
        </label>

        <input
          {...register("password", { required: true })}
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="password"
        />
        <span className={`text-red-500 text-xs my-1 self-end ${!errors.password && 'opacity-0'}`}>
          This field is required
        </span>

        <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-4 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">
          Login
        </button>
        <div className="flex mt-6 justify-center text-xs">
          <a className="text-blue-400 hover:text-blue-500" href="#">
            Forgot Password
          </a>
          <span className="mx-2 text-gray-300">/</span>
          <a className="text-blue-400 hover:text-blue-500" href="#">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
