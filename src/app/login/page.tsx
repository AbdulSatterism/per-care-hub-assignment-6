"use client";
import PCForm from "@/components/form/PCForm";
import PCInput from "@/components/form/PCInput";
import Loading from "@/components/UI/Loading";
import { useUserLogin } from "@/hooks/auth.hook";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Login = () => {
  const { mutate: handleLogin, isPending } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const loginData = {
      ...data,
    };

    handleLogin(loginData);
  };

  return (
    <>
      {isPending && <Loading />}

      <div className="flex h-screen  p-6 bg-gray-100 w-full flex-col items-center justify-center shadow-xl">
        <h1 className="my-2 text-2xl font-bold uppercase">Login</h1>
        <div className="lg:w-[35%] md:w-[50%] w-full">
          <PCForm
            // resolver={zodResolver(loginValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="py-3">
              <PCInput label="Email" required name="email" type="email" />
            </div>

            <div className="py-3">
              <PCInput
                label="Password"
                required
                name="password"
                type="password"
              />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-blue-700 font-semibold text-default"
              size="md"
              type="submit"
            >
              Login
            </Button>
          </PCForm>
          <div className="text-center">
            new user ? <Link href={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
