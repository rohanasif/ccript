import { useGetAppointmentsQuery } from "../slice/apiSlice";
import { useEffect } from "react";
const Appointments = () => {
  const { data } = useGetAppointmentsQuery();
  console.log(useGetAppointmentsQuery());
  return (
    <div>
      <h1>Appointments</h1>
      <table></table>
    </div>
  );
};
export default Appointments;
