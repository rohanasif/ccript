import { useDispatch } from "react-redux";
import { useRefreshTokenMutation } from "../slice/apiSlice";
import { refreshToken, setToken } from "../slice/authSlice";
import Cookies from "js-cookie";
import { useEffect } from "react";

const RefreshBtn = () => {
  const dispatch = useDispatch();
  const [refresh, refreshResponse] = useRefreshTokenMutation();
  const { isLoading, isSuccess, isError, error, data } = refreshResponse;

  useEffect(() => {
    if (isSuccess) {
      const token = data?.newToken || Cookies.get("token");
      Cookies.set("token", token, { expires: 1, secure: true });
      dispatch(setToken({ token }));
    }
  }, [data?.newToken, isSuccess, dispatch]);

  const handleClick = () => {
    refresh();
  };

  return (
    <>
      <button onClick={handleClick}>
        {isLoading ? "Loading..." : "Refresh"}
      </button>
      {isError && <p className="text-red-700">{error?.error}</p>}
    </>
  );
};

export default RefreshBtn;
