import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

const CreateUser = () => {
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

  const onSubmit = (data) => {
    const { name, email, password } = data;
    const newUser = JSON.stringify({
      name: name,
      email: email,
      password: password,
    });
    mutateAsync(newUser);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-sm mr-auto px-3 sm:ml-6 py-10"
    >
      <span className="mx-auto mb-5 text-xl text-red-500 font-black">
        {message}
      </span>
      <input
        {...register("name")}
        className="formInput"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
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
        Create Profile
      </button>
    </form>
  );
};

export default CreateUser;
