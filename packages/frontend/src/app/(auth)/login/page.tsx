import { Icons } from "@/components/common/icons";
import PageWrapper from "@/components/common/page-wrapper";
import LoginForm from "./components/login-form";

const LoginPage = () => {
  return (
    <main
      className="grid place-items-center bg-[#34581C] bg-[url('/img/bg.jpeg')] bg-cover bg-center bg-no-repeat text-white bg-blend-multiply"
      // style={{ backgroundImage: "url('/img/bg.jpeg')" }}
    >
      <PageWrapper className="flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center gap-x-2">
            <Icons.logo className="h-12 w-12" />
            <p className="text-xl font-medium">SavvyCircle</p>
          </div>
          <p className="text-center font-medium leading-[18px]">
            SavvyCircle is a dApp for group savings and loans with Telegram
            integration, offering secure, automated transactions via blockchain.
          </p>
        </div>
        <LoginForm />
      </PageWrapper>
    </main>
  );
};

export default LoginPage;
