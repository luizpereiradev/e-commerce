import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Input from "../../components/Input";

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
  } = useForm<Inputs>({ mode: "all" });

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="email" name="email" register={register} />

      <Input label="password" name="password" register={register} />
      <input type="submit" />
    </form>
  );
}

export default Login;
