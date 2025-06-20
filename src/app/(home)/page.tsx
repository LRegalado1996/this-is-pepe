import { Title } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-screen h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-50" />

        <div className="absolute bottom-1/12 right-0 left-0 max-w-[1280px] flex flex-col items-center gap-4 m-auto px-4">
          <Image
            src={"/images/me.jpeg"}
            alt={"My avatar"}
            width={500}
            height={500}
            className="w-50 h-50 object-cover rounded-full border-6 border-light-primary"
          />
          <Title className="text-center bg-light-primary rounded-full py-4 px-8">
            Welcome! I&apos;m Lucas Regalado
          </Title>
        </div>
      </div>
      <div className="min-h-96">Hola</div>
    </>
  );
}
