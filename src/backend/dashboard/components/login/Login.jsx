import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchAuth, selectIsAuth } from '../../../../redux/slices/auth';
import { useForm } from "react-hook-form"; // Eklendi
import './Login.css';

function Login() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { error } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => { // Düzeltildi
    const data = await dispatch(fetchAuth(values));
    console.log(values)
    if (!data.payload) {
      alert("Giriş başarısız!");
    }
  };

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        {...register("email")} // Düzeltildi
        required
      />
      <input
        type="password"
        placeholder="Password"
        {...register("password")} // Düzeltildi
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;