import { Title } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative -mt-[52px] w-screen h-screen">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/videos/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-light-primary opacity-20" />

        <div className="absolute bottom-10 right-0 left-0 max-w-[1280px] flex flex-col items-center gap-5 m-auto px-4">
          <div className="flex gap-4 items-center">
            <Image
              src={"/images/me.png"}
              alt={"My avatar"}
              width={400}
              height={400}
              className="w-40 h-40 object-cover rounded-full border-2 border-dark-primary bg-light-primary"
            />

            <Title className="text-center bg-light-primary border-2 border-dark-primary rounded-xl md:rounded-full p-4 md:px-8 h-fit">
              <span className="hidden md:inline-block">Welcome!</span> I&apos;m Lucas Regalado
            </Title>
          </div>
          <p className="text-center bg-light-primary border-2 border-dark-primary rounded-xl md:rounded-full p-4 md:px-8">
            I&apos;m a software developer with over 8 years of experience. I&apos;m passionate about
            my craft, enjoy working in a team, and always seek new challenges that enable me to grow
            and help others. I invite you to explore this site, where you&apos;ll find more
            information about who I am, my past projects, and how to contact me. Thank you for being
            here!
          </p>
        </div>
      </div>
      <div className="min-h-96">Hola</div>
    </>
  );
}
