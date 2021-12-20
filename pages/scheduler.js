import { getSession } from "next-auth/react";
import ApptForm from "../components/ApptForm";

function scheduler() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-medium mt-2 border-b-2 px-10 pb-5">
        Appointment Scheduler
      </h1>{" "}
      <div
        className="inline-block bg-white rounded-md p-5 text-left
                sm:shadow-lg transform transition-all my-8 align-middle max-w-sm w-full"
      >
        <ApptForm />
      </div>
    </div>
  );
}

export default scheduler;

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
