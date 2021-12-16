import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { formatPhoneNumber } from "react-phone-number-input";
import { useMutation, useQuery, useQueryClient } from "react-query";
import CreateUser from "../../components/CreateUser";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const Dashboard = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data } = useQuery("schedule", () => fetchSchedule());

  const fetchSchedule = () =>
    fetch("http://localhost:3000/api/scheduled").then((res) => res.json());

  const handleDelete = async (id) => {
    router.query = id;
    try {
      const deleted = await fetch("/api/" + id, {
        method: "DELETE",
      });

      console.log(deleted);
    } catch (error) {
      console.log(error);
    }
  };
  const mutation = useMutation(handleDelete, {
    onSuccess: () => {
      queryClient.invalidateQueries("schedule");
      toast.success("Appt deleted");
    },
  });
  return (
    <div className="h-full">
      <h1 className="text-center text-3xl font-semibold my-10">Appointments</h1>
      {data?.map(({ slot: { date, time }, name, phone, email, _id: id }) => (
        <div
          key={id}
          className="pb-4 mb-4 shadow-md text-lg px-10 sm:flex sm:justify-center"
        >
          <div className="flex flex-col justify-center pb-2 sm:pb-2">
            <p>Date: {date}</p>
            <span>
              Time: {time < 5 ? Number(time) + 8 : Number(time) + 8 - 12}{" "}
              {time <= 3 ? "AM" : "PM"}
            </span>
          </div>
          <div className="sm:ml-10 border-l-2 pl-10">
            <p className="">Client: {name}</p>
            <span>Phone: {formatPhoneNumber(phone)}</span>
            <p>Email: {email}</p>
          </div>
          <div className="sm:ml-10 pl-10 flex">
            <button
              onClick={() => mutation.mutate(id)}
              className="pt-2 sm:pt-0 sm:mx-auto text-xl text-red-600 font-black hover:animate-pulse"
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
      <CreateUser />
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
};
