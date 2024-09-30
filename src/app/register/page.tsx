"use client";

import PCForm from "@/components/form/PCForm";
import PCInput from "@/components/form/PCInput";
import Loading from "@/components/UI/Loading";
import { envConfig } from "@/envConfig";
import { useUserRegistration } from "@/hooks/auth.hook";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Register = () => {
  const { mutate: handleRegister, isPending } = useUserRegistration();

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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isPending && <Loading />}

      <div className="flex h-screen  p-6 bg-gray-100 w-full flex-col items-center justify-center shadow-xl">
        <h1 className="my-2 text-xl font-bold uppercase">welcome</h1>
        <h1 className="my-2 text-2xl font-bold uppercase">
          Register with Animal Care
        </h1>
        <div className="lg:w-[35%] md:w-[50%] w-full">
          <PCForm
            // resolver={zodResolver(loginValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="py-3">
              <PCInput label="Name" required name="name" type="text" />
            </div>
            <div className="py-3">
              <PCInput label="Email" required name="email" type="email" />
            </div>
            <div className="py-3">
              <PCInput label="Phone" required name="phone" type="text" />
            </div>
            <div className="py-3">
              <PCInput
                label="Password"
                required
                name="password"
                type="password"
              />
            </div>
            <div className="py-3">
              <PCInput label="Image" required name="image" type="file" />
            </div>
            <Button
              className="my-3 w-full rounded-md bg-blue-700 font-semibold text-default"
              size="md"
              type="submit"
            >
              Register
            </Button>
          </PCForm>
          <div className="text-center">
            have account ? <Link href={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
