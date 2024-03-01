import Input from "@/components/Input";
import axios from "axios";
import { useCallback, useState } from "react";

const Auth = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login'? 'register': 'login');
  }, []);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password,
      });
    } catch (error) {
      
    }
  }, [email, name, password]);

  return (
    <div className="relative flex h-full w-full bg-[url('/images/hero1.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Netflix Logo" className="h-12"/>
        </nav>
        <main className="flex justify-center">
          <div className="px-16 py-16 bg-black bg-opacity-70 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl m-8 font-semibold">
              {variant === 'login' ? 'Sign in' : 'Create account'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (<Input
              id="name"
              type="text"
              onChange={(e: any) => setName(e.target.value)}
              label="Username"
              value={name}
              />)}
              <Input
              id="email"
              type="email"
              onChange={(e: any) => setEmail(e.target.value)}
              label="Email"
              value={email}
              />
              <Input
              id="password"
              type="password"
              onChange={(e: any) => setPassword(e.target.value)}
              label="Password"
              value={password}
              />
              <button onClick={register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                {variant === 'login'? 'Login' :  'Sign up'}
              </button>
              <p className="text-neutral-500 mt-12">
                {variant === 'register' ? 'Already have an account?' : 'New to Netflix?'} 
                <span className="text-white ml-1 hover:underline cursor-pointer"
                      onClick={toggleVariant}>
                  {variant === 'login' ? 'Create an account' : 'Login'}
                </span>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Auth;