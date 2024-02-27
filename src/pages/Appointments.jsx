import { useGetAppointmentsQuery } from "../slice/apiSlice";
import { useEffect } from "react";
import { getAllAppointments } from "../slice/appointmentsSlice";
import { useDispatch } from "react-redux";
import RefreshBtn from "../components/RefreshBtn";
const Appointments = () => {
  const dispatch = useDispatch();
  const { data: appointments } = useGetAppointmentsQuery();
  useEffect(() => {
    dispatch(getAllAppointments(appointments));
  }, [appointments, dispatch]);
  return (
    <div>
      <h1>Appointments</h1>
      <RefreshBtn />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Weekday</th>
            <th>Name</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {appointments &&
            Object.entries(appointments).map(([id, appointment]) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{appointment.startTimeFormatted}</td>
                <td>{appointment.endTimeFormatted}</td>
                <td>{appointment.weekDay}</td>
                <td>{appointment.name}</td>
                <td>{appointment.reason}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Appointments;
