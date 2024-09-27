



import { redirect } from "next/navigation";
import { getSession } from "@/lib/getSession";
import { SignInGoogle } from "@/components/auth/sign-in-goole";
import { SignInResend } from "@/components/auth/sign-in-resend";

const Login = async () => {

  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/");




  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212]  dark:bg-black">
      <SignInGoogle/>
      {/* <SignInResend/> */}
    </div>
  );
};

export default Login;
