/**
 * Calendly integration component for scheduling meetings.
 */
import { Subtitle } from "../ui/subtitle";

export const CalendlyForm = () => {
  return (
    <div>
      <Subtitle className="mb-2">Schedule a meeting with me</Subtitle>
      <div className="relative h-screen w-full">
        <iframe
          src="https://calendly.com/lucas-regalado-pereyra/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=FFF&text_color=252323&primary_color=a99985"
          width="100%"
          height="100%"
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
};
