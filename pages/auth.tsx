import Input from "@/components/Input";

const Auth = () => {
  return (
    <div className="relative flex h-full w-full bg-[url('/images/hero1.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Netflix Logo" className="h-12"/>
        </nav>
        <main className="flex justify-center">
          <div className="px-16 py-16 bg-black bg-opacity-70 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl m-8 font-semibold">
              Sign in
            </h2>
            <div className="flex flex-col gap-4">
              <Input />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Auth;