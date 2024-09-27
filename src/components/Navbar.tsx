import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { auth } from "@/auth";
import { handleSignOut } from "@/app/auth/actions";

const Navbar = async () => {
  const session = await auth()

  const user = session?.user

  // const isAdmin = user?.email === process.env.ADMIN_EMAIL
  const isAdmin = user?.email === "tirthankarnath03@gmail.com";

  return (
    <nav className="sticky z-[100] h-20 inset-x-0 top-0 bg-white/75 w-full border-b border-gray-200 backdrop-blur">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 text-xl font-semibold">
            case<span className="text-green-600">cobra</span>
          </Link>

          <div className=" h-full flex items-center space-x-4">
            {user ? (
              <>
        <form action={handleSignOut}>
                <Button
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "text-[1rem] p-5  font-semibold",
                  })}
                >
                  Sign out
                </Button>
                </form>

                {isAdmin ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                      className: "text-[1rem] p-5 font-semibold",
                    })}
                  >
                    Dashboard ✨
                  </Link>
                ) : null}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className:
                      "hidden text-[1rem] sm:flex items-center gap-1 p-5 font-semibold",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>

                <Link
                  href="/auth/signin"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                </Link>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden text-[1rem] sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
