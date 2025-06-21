import { Subtitle } from "../ui/subtitle";

export const GoogleFormContact = () => {
  return (
    <div>
      <Subtitle className="mb-2">Send me a message</Subtitle>
      <div className="relative h-screen w-full">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd5_Y749yiy8U2_aS0okWBZ-jvNg9VTXt8S1uQbTq_6fGgDLA/viewform?embedded=true"
          className="absolute top-0 left-0 w-full h-full border-0"
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
};
