import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";


const Login = () => {
  return (
    <main className={"w-full h-screen flex items-center justify-center bg-[#fafafa]"}>
      <div className="w-[420px] h-[270px] mx-4 sm:mx-auto bg-white p-5 shadow-sm rounded-2xl flex flex-col gap-4">
        <div className="text-center">
          <span
              className="text-center text-[#323232] text-[32px] font-bold">Texno</span>
          <span
            className="text-center text-[#1b99e0] text-[32px] font-bold">bozor</span>
        </div>
        <Input
          type={"text"}
          placeholder={"Enter your email"}
          className="bg-[#efefef] rounded-lg"
        />
        <Input
          type={"text"}
          placeholder={"Enter your password"}
          className="bg-[#efefef] rounded-lg"
        />
        <Button
          className="w-full rounded-lg"
        >
          Login
        </Button>
      </div>
    </main>
  );
};

export default Login;
