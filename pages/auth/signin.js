import { getProviders, signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

function signin({ providers }) {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, reset } = useForm({ mode: "onBlur" });
  const [message, setMessage] = useState("");

  const { mutateAsync } = useMutation((newUser) =>
    fetch("/api/auth/signup", {
      method: "POST",
      body: newUser,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
  );

  const onSubmit = async (data) => {
    const { name, email, password } = data;
    if (!isLogin) {
      const newUser = JSON.stringify({
        name: name,
        email: email,
        password: password,
      });
      mutateAsync(newUser);
      reset();
    } else {
      const user = await signIn("credentials", {
        email: email,
        password: password,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-center -mt-32">
      <section className="p-5 max-w-sm w-full ">
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col max-w-sm mx-auto px-3 sm:ml-6 py-10"
          >
            <span
              className={`mx-auto mb-5 text-xl ${
                message === "Access Denied" && "text-red-500"
              } text-blue-600 font-black`}
            >
              {message}
            </span>
            <div
              className={`${
                isLogin
                  ? "border-blue-600 border-2 text-blue-600 "
                  : "border-red-500 border-2 text-red-500 bg-gray-100"
              } shadow-lg font-black rounded-lg py-2 mb-5 active:scale-95 transition-all transform duration-150`}
            >
              <h3
                className="text-2xl font-semibold  cursor-pointer"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setMessage("");
                }}
              >
                {isLogin ? "LOGIN" : "SIGN UP"}
              </h3>
            </div>
            {!isLogin && (
              <input
                {...register("name")}
                className="formInput"
                type="text"
                name="name"
                id="name"
                placeholder="name"
              />
            )}
            <input
              {...register("email")}
              className="formInput"
              placeholder="email"
              type="text"
              name="email"
              id="email"
            />
            <input
              {...register("password")}
              className="formInput"
              placeholder="password"
              type="password"
              name="password"
              id="password"
            />
            <button className="formSubmitBtn w-full mx-auto" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
