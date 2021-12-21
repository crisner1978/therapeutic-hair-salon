import { getSession, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";

function profile({ session }) {
  const { data, status } = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    (newUser) =>
      fetch("/api/auth/users", {
        method: "POST",
        body: newUser,
        headers: { "Content-Type": "application/json" },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
        toast.success("User Added");
      },
    }
  );

  const onSubmit = (data) => {
    console.log("you data data", data);
    const { email, role } = data;
    const newUser = JSON.stringify({
      email: email,
      role,
    });
    mutateAsync(newUser);
    reset();
  };

  const { data: users } = useQuery("users", () =>
    fetch("/api/auth/users").then((res) => res.json())
  );
  console.log("USERS", users);

  const handleDelete = async (id) => {
    try {
      const deleted = await fetch("/api/auth/users", {
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
      queryClient.invalidateQueries("users");
      toast.success("User Deleted");
    },
  });

  return (
    <div
      className={`flex flex-col items-center justify-center text-left space-y-5 py-8 min-h-screen px-3 ${
        data.role === "user" && "-mt-32"
      }`}
    >
      <h1 className="text-2xl sm:text-3xl font-medium text-blue-600 border-b-2 pb-2 text-center">
        Hey {data?.user.name}!
      </h1>
      <h3 className="text-xl sm:text-2xl">
        You're assigned the role of{" "}
        <span className="font-black text-blue-600">
          {data?.role?.toUpperCase()}
        </span>
      </h3>
      <h3 className="text-xl sm:text-2xl">Email: {data?.user.email}</h3>

      <div className="flex flex-col justify-center items-center">
        {data.role === "admin" ? (
          <>
            <p className="max-w-md w-screen py-5 text-center text-xl font-semibold text-gray-600">
              You can add users by email and delete users that no longer need
              access.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col max-w-md w-screen  pb-10 px-6"
            >
              <span className="inline-block transform transition-all text-sm text-red-500 font-black text-right pb-1">
                {errors.email?.message}
              </span>
              <input
                {...register("email", {
                  required: "EMAIL IS REQUIRED",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "VALID EMAIL IS REQUIRED",
                  },
                })}
                className="formInput text-center"
                placeholder="ADD A USER BY EMAIL ADDRESS"
                type="text"
                name="email"
                id="email"
              />

              <div className="flex justify-evenly my-2 text-lg font-semibold text-gray-600">
                <div className="flex items-center space-x-2">
                  <label htmlFor="admin">ADMIN</label>
                  <input
                    {...register("role", {
                      required: "ROLE IS REQUIRED",
                    })}
                    type="radio"
                    value="admin"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <label htmlFor="user">USER</label>
                  <input
                    {...register("role", {
                      required: "ROLE IS REQUIRED",
                    })}
                    type="radio"
                    value="user"
                  />
                </div>
              </div>

              <button className="formSubmitBtn w-full mx-auto" type="submit">
                Add User
              </button>
            </form>
            <ul>
              <h1 className="text-center mb-5 text-xl sm:text-2xl font-medium text-gray-600">
                ALLOWED USERS - {users?.length}
              </h1>
              {users?.map(({ _id: id, name, email, role }) => (
                <li
                  key={id}
                  className="grid grid-cols-1 shadow-md px-10 py-4 md:grid-cols-4 mb-5 gap-x-10 col-span-6 hover:scale-105 transition-all transform duration-150 ease-out"
                >
                  <h1 className="userInfo">
                    {name || (
                      <span className="text-sm sm:text-base font-medium text-red-400">
                        NEEDS TO REGISTER
                      </span>
                    )}
                  </h1>
                  <p className="userInfo">{email}</p>
                  <p className="userInfo">
                    {role || (
                      <span className="text-sm sm:text-base font-medium text-red-400">
                        NEEDS TO REGISTER
                      </span>
                    )}
                  </p>
                  <div>
                    <button
                      onClick={() => mutation.mutate(id)}
                      className="text-red-300 hover:text-red-500 hover:font-medium"
                    >
                      Delete User
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default profile;

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
