import Image from "next/image";
import GridPattern from "@/components/ui/Grid";

const Process = () => {
  return (
    <section id="process" className="py-20 h-dvh relative">
      <GridPattern variant="bottom-right" />
      <Image
        src="./divider.svg"
        alt={"Divider"}
        width={671}
        height={9}
        className="absolute left-0 top-0 right-0 w-full -rotate-180 -my-1"
      />
      <div className="container-main bg-foreground h-[500px]"></div>
    </section>
  );
};
export default Process;
