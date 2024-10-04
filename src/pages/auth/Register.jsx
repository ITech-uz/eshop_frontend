import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Label} from "@/components/ui/label.jsx";

const Register = () => {
  return (
    <main className={"w-full h-screen flex items-center justify-center bg-[#fafafa]"}>
      <div className="w-[420px] mx-4 sm:mx-auto bg-white p-5 shadow-sm rounded-2xl flex flex-col gap-4">
        <div className="text-center">
          <span
            className="text-center text-[#323232] text-[32px] font-bold">Texno</span>
          <span
            className="text-center text-[#1b99e0] text-[32px] font-bold">bozor</span>
        </div>
        <div className={"flex flex-col gap-2"}>
          <Label htmlFor={"name"} className={"text-foreground font-medium"}>Name:</Label>
          <Input
            id="name"
            type="text"
            placeholder={"John Doe"}
            className="bg-[#efefef] rounded-lg"
          />
        </div>
        <div className={"flex flex-col gap-2"}>
          <Label htmlFor={"email"} className={"text-foreground font-medium"}>Email:</Label>
          <Input
            id="email"
            type="text"
            placeholder={"john001@mail.com"}
            className="bg-[#efefef] rounded-lg"
          />
        </div>
        <div className={"flex flex-col gap-2"}>
          <Label htmlFor={"tel"} className={"text-foreground font-medium"}>Phone:</Label>
          <Input
            id="tel"
            type="text"
            placeholder={"+99 895 123 4567"}
            className="bg-[#efefef] rounded-lg"
          />
        </div>
        <div className={"flex flex-col gap-2"}>
          <Label htmlFor={"password"} className={"text-foreground font-medium"}>Password</Label>
          <Input
            id="password"
            type="text"
            placeholder={"***************"}
            className="bg-[#efefef] rounded-lg"
          />
        </div>
        <div className={"flex flex-col gap-2"}>
          <Label htmlFor={"password"} className={"text-foreground font-medium"}>Repeat password</Label>
          <Input
            id="password"
            type="text"
            placeholder={"***************"}
            className="bg-[#efefef] rounded-lg"
          />
        </div>
        <Button
          className="w-full rounded-lg"
        >
          Login
        </Button>
      </div>
    </main>
  )
}

export default Register;
