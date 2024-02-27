import { useDispatch } from "react-redux";
import { useRefreshTokenMutation } from "../slice/apiSlice";
import { setToken } from "../slice/authSlice";
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
      <button
        onClick={handleClick}
        className="py-2 px-4 text-white rounded-md bg-green-700 mt-4 ml-4"
      >
        {isLoading ? "Loading..." : "Refresh"}
      </button>
      {isError && <p className="text-red-700">{error?.error}</p>}
    </>
  );
};

export default RefreshBtn;
