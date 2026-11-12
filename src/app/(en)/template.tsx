/**
 * Re-mounts on every navigation so the page curtain plays again.
 */
import { PageCurtain } from "@/components/layout/page-curtain";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageCurtain />
      {children}
    </>
  );
}
