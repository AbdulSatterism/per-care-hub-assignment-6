/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import PCForm from "@/components/form/PCForm";
import PCInput from "@/components/form/PCInput";
import Loading from "@/components/UI/Loading";
import { envConfig } from "@/envConfig";
import { useUserRegistration } from "@/hooks/auth.hook";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const Register = () => {
  const { mutate: handleRegister, isPending } = useUserRegistration();
  const router = useRouter();

  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${envConfig.imageToken}`;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const res = await fetch(imageHostingURL, {
        method: "POST",
        body: formData,
      });
      const imgData = await res.json();
      const imgURL = imgData?.data?.display_url;

      const registerData = {
        ...data,
        image: imgURL,
        follower: 0,
        role: "user",
        payment: "unpaid",
        isDeleted: false,
      };

      handleRegister(registerData);

      router.push("/");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <>
      {isPending && <Loading />}

      <div className="flex flex-col  items-center justify-center">
        <h1 className="my-2 text-xl font-bold uppercase">Welcome</h1>
        <h1 className="my-2 text-2xl font-bold uppercase">
          Sign Up with <span className="text-[#05caec]"> Animal</span> Care
        </h1>
        {isPending && <Loading />}

        {/* Left side (Image) */}
        <div className="flex gap-10 py-10">
          <div className="hidden md:flex md:w-1/2 justify-center">
            <Image
              src="https://res.cloudinary.com/drojlcuyf/image/upload/v1727929480/images_x3wbvw.png"
              alt="Register"
              width={500}
              height={500}
            />
          </div>

          {/* Right side (Form) */}
          <div className="flex w-full md:w-1/2 flex-col items-center justify-center shadow-2xl rounded-xl p-4">
            <div className="lg:w-[80%] md:w-[90%] w-full">
              <PCForm onSubmit={onSubmit}>
                <div className="py-3 ">
                  <PCInput label="Name" required name="name" type="text" />
                </div>
                <div className="py-3">
                  <PCInput label="Email" required name="email" type="email" />
                </div>
                <div className="py-3 ">
                  <PCInput label="Phone" required name="phone" type="text" />
                </div>
                <div className="py-3 ">
                  <PCInput
                    label="Password"
                    required
                    name="password"
                    type="password"
                  />
                </div>
                <div className="py-3 ">
                  <PCInput label="Image" required name="image" type="file" />
                </div>
                <Button
                  className="my-3  rounded-md bg-[#05caec]font-semibold text-default"
                  size="md"
                  type="submit"
                >
                  Register
                </Button>
              </PCForm>
              <div>
                Already have an account?{" "}
                <Link href={"/login"} className="underline text-[#05caec]">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
