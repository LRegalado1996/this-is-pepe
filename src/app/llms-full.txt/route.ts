/**
 * Serves /llms-full.txt: the whole site as one Markdown file for AI assistants (English).
 */
import { buildLlmsFull, llmsResponse } from "@/lib/seo/llms";

export const dynamic = "force-static";

export const GET = () => llmsResponse(buildLlmsFull("en"));
