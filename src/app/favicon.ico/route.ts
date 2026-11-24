/**
 * /favicon.ico: the "LR" monogram at 48px, the address crawlers and tools try
 * by default. The file is an ICO container holding the PNG as it is.
 */
import { renderMonogram } from "@/lib/brand/monogram";

export const dynamic = "force-static";

const SIZE = 48;

export async function GET() {
  const png = Buffer.from(await (await renderMonogram(SIZE, true)).arrayBuffer());

  // ICONDIR (6 bytes) + one ICONDIRENTRY (16 bytes), then the image data.
  const header = Buffer.alloc(22);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count
  header.writeUInt8(SIZE, 6);
  header.writeUInt8(SIZE, 7);
  header.writeUInt16LE(1, 10); // colour planes
  header.writeUInt16LE(32, 12); // bits per pixel
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(header.length, 18); // offset of the image data

  return new Response(Buffer.concat([header, png]), {
    headers: { "Content-Type": "image/x-icon" },
  });
}
