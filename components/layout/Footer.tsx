import Link from "next/link";
import { siteConfig } from "@/data/site.config";

export const Footer = () => {
  return (
    <footer className='py-12 border-t border-white/5'>
      <div className='mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='text-sm text-white/40'>
          {siteConfig.footer.copyright}
        </div>

        <div className='flex gap-6'>
          {siteConfig.socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-white/40 hover:text-white transition-colors'
            >
              {social.label}
            </Link>
          ))}
        </div>

        <div className='text-sm text-white/40'>
          Made by{" "}
          <span className='text-white ml-1'>{siteConfig.footer.madeBy}</span>
        </div>
      </div>
    </footer>
  );
};
