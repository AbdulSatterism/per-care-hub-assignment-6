"use client";

import PCForm from "@/components/form/PCForm";
import PCInput from "@/components/form/PCInput";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Register = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen  px-6 bg-gray-100 w-full flex-col items-center justify-center shadow-xl">
      <h1 className="my-2 text-xl font-bold uppercase">welcome</h1>
      <h1 className="my-2 text-2xl font-bold uppercase">
        Register with Pet Care Hub
      </h1>
      <div className="lg:w-[35%] md:w-[50%] w-full">
        <PCForm
          // resolver={zodResolver(loginValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="py-3">
            <PCInput label="Name" name="name" type="text" />
          </div>
          <div className="py-3">
            <PCInput label="Email" name="email" type="email" />
          </div>
          <div className="py-3">
            <PCInput label="Mobile" name="mobileNumber" type="text" />
          </div>
          <div className="py-3">
            <PCInput label="Password" name="password" type="password" />
          </div>
          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
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
  );
};

export default Register;
