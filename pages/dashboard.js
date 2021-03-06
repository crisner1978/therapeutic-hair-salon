import { getSession } from "next-auth/react";
import toast from "react-hot-toast";
import { formatPhoneNumber } from "react-phone-number-input";
import { useMutation, useQuery, useQueryClient } from "react-query";

const Dashboard = ({ session }) => {
  const queryClient = useQueryClient();

  const { data } = useQuery("schedule", () => fetchSchedule());

  const fetchSchedule = () =>
    fetch("/api/book", {
      method: "GET",
    }).then((res) => res.json());

  const handleDelete = async (id) => {
    // router.query = id;
    try {
      const deleted = await fetch("/api/book", {
        method: "DELETE",
        body: id,
      });
      console.log("deleted", deleted);
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
    <div className="pb-20 min-h-screen bg-white">
      <h1 className="text-center text-3xl font-medium my-10 shadow-md pb-5">
        Appointments - {data?.length}
      </h1>
      {data?.length < 1 && (
        <div className="flex justify-center pt-20">
          <h1 className="text-2xl font-medium text-gray-600">
            No Appointments Scheduled
          </h1>
        </div>
      )}
      {data?.map(({ slot: { date, time }, name, phone, email, _id: id }) => (
        <div
          key={id}
          className="pb-4 mb-4 shadow-md max-w-3xl mx-auto text-lg px-10 sm:flex sm:justify-center"
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
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });


  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
