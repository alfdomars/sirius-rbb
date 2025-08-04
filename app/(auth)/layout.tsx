import { Logo } from "@/components/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center bg-primary">
      <div className="flex w-full max-w-full flex-col items-center gap-6 p-6 md:p-10">
        <Logo width={100} height={100} />
        {children}
      </div>
    </section>
  );
}
