/**
 * Serves /es/llms.txt: the Markdown index of the site for AI assistants (Spanish).
 */
import { buildLlmsIndex, llmsResponse } from "@/lib/seo/llms";

export const dynamic = "force-static";

export const GET = () => llmsResponse(buildLlmsIndex("es"));
