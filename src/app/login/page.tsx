"use client";
import PCForm from "@/components/form/PCForm";
import PCInput from "@/components/form/PCInput";
import Loading from "@/components/UI/Loading";
import { useUser } from "@/context/user.provider";
import { useUserLogin } from "@/hooks/auth.hook";
import { Button } from "@nextui-org/button";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Login = () => {
  const { mutate: handleLogin, isPending } = useUserLogin();
  const router = useRouter();
  const { setIsLoading } = useUser();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const loginData = {
      ...data,
    };

    handleLogin(loginData);
    setIsLoading(true);
    router.push("/");
  };

  return (
    <div className="flex flex-col  items-center justify-center">
      <h1 className="my-2 text-xl font-bold uppercase">Welcome</h1>
      <h1 className="my-2 text-2xl font-bold uppercase">
        Login with <span className="text-[#05caec]"> Animal</span> Care
      </h1>
      {isPending && <Loading />}

      {/* Left side (Image) */}
      <div className="flex gap-10 py-10">
        <div className="hidden md:flex md:w-1/2 justify-center">
          <Image
            src="https://res.cloudinary.com/drojlcuyf/image/upload/v1727929480/images_x3wbvw.png"
            alt="Register Illustration"
            width={600}
            height={600}
          />
        </div>

        {/* Right side (Form) */}
        <div className="flex w-full md:w-1/2 flex-col items-center justify-center shadow-2xl rounded-xl p-4">
          <div className="lg:w-[80%] md:w-[90%] w-full">
            <PCForm onSubmit={onSubmit}>
              <div className="py-3">
                <PCInput label="Email" required name="email" type="email" />
              </div>

              <div className="py-3 ">
                <PCInput
                  label="Password"
                  required
                  name="password"
                  type="password"
                />
              </div>

              <Button
                className="my-3  rounded-md bg-[#05caec] font-semibold text-default"
                size="md"
                type="submit"
              >
                Login
              </Button>
            </PCForm>
            <div>
              New to Animal Care?{" "}
              <Link href={"/register"} className="underline text-[#05caec]">
                {" "}
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
