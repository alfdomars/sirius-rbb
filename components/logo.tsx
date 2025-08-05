import Image from "next/image";
interface LogoProps {
  size: number;
}
export function Logo({ size }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/images/sinergi.png"
        alt="Company Logo"
        width={size}
        height={size}
        className="object-contain"
      />
      <span className="text-2xl font-bold tracking-wide text-white">RBB</span>
    </div>
  );
}
