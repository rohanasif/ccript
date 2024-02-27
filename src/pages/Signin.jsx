import { useState, useEffect } from "react";
import { useSigninMutation } from "../slice/apiSlice";
import { signIn } from "../slice/authSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [signin, signinResponse] = useSigninMutation();
  const { isLoading, isSuccess, isError, error, data } = signinResponse;

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    signin(user);
    dispatch(signIn(user, token));
  };

  const token = data?.token || Cookies.get("token");

  useEffect(() => {
    if (isSuccess) {
      const token = data?.token || Cookies.get("token");
      Cookies.set("token", token, { expires: 1, secure: true });
      dispatch(signIn({ user: { username }, token }));
      navigate("/");
    }
  }, [data?.token, dispatch, isSuccess, navigate, username]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <button>{isLoading ? "Loading..." : "Sign In"}</button>
      </div>
      {isError && <p className="text-red-700">{error?.error}</p>}
    </form>
  );
}

export default Signin;
