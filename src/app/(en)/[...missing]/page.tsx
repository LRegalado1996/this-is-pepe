/**
 * Catch-all so unknown URLs render the branded 404 instead of the default one.
 */
import { notFound } from "next/navigation";

export default function Missing() {
  notFound();
}
