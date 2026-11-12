/**
 * Renders one or more schema.org objects as a JSON-LD script tag.
 */
interface Props {
  data: object | object[];
}

export const JsonLd = ({ data }: Props) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
  />
);
