/**
 * Closing call to action with social links, followed by the footer small
 * print. The giant headline is itself the link.
 */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { socialProfiles } from '@/lib/seo/config';

const socials = [
  { name: 'LinkedIn', href: socialProfiles.linkedin },
  { name: 'X', href: socialProfiles.twitter },
  { name: 'Instagram', href: socialProfiles.instagram },
  { name: 'WhatsApp', href: socialProfiles.whatsapp },
];

export const ContactCta = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1280px] m-auto px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-moss/70 mb-4">
            Have a project in mind?
          </p>
          <Link href="/contact" className="group block w-fit">
            <span className="font-display text-[clamp(2.8rem,9vw,8rem)] text-ink transition-colors group-hover:text-moss inline-flex items-start gap-2 md:gap-4">
              Let&apos;s work
              <ArrowUpRight
                className="w-[0.55em] h-[0.55em] mt-[0.12em] text-volt-dim transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={2.25}
              />
            </span>
            <span className="font-display block text-[clamp(2.8rem,9vw,8rem)] text-ink transition-colors group-hover:text-moss">
              together
            </span>
          </Link>

          <div className="flex flex-wrap gap-3 mt-10">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.7rem] uppercase tracking-[0.14em] font-bold border border-ink/30 rounded-full px-4 py-2 transition-colors hover:bg-volt hover:border-volt"
              >
                {social.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="w-full bg-ink text-paper/70">
        <div className="max-w-[1280px] m-auto px-4 py-6 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="font-display text-sm text-paper">
            Lucas Regalado<span className="text-volt">.</span>
          </span>
          <span>Senior Full Stack Developer · Montevideo, Uruguay</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </section>
  );
};
