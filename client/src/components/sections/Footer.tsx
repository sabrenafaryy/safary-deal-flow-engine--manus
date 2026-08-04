/**
 * Footer. MUST carry the regulatory line:
 * "Investment property lending only. Not for owner-occupied consumer mortgages."
 */
import { Wordmark } from "@/components/brand/Wordmark";

export function Footer() {
  return (
    <footer className="bg-footer py-14">
      <div className="container">
        <div className="flex flex-col gap-8 border-b border-white/8 pb-9 md:flex-row md:items-start md:justify-between">
          <div>
            <Wordmark onDark size="lg" />
            <p className="mono-label mt-5 text-on-dark-muted">
              Borrower acquisition systems for private money lenders
            </p>
          </div>

          <div className="text-[0.88rem] leading-[1.7] text-[#7B8A99] md:text-right">
            <p className="font-semibold text-white/85">Safary Marketing</p>
            <p>Houston, Texas</p>
            <p className="mt-2">
              <a
                href="#book"
                className="text-brand-light transition-colors hover:text-white"
              >
                Book a call
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-3 text-[0.83rem] leading-[1.7] text-[#7B8A99]">
          <p className="max-w-[70ch] font-medium text-[#9FB2C2]">
            Investment property lending only. Not for owner-occupied consumer
            mortgages.
          </p>
          <p className="max-w-[80ch]">
            Business purpose lending only. Campaigns are geo-fenced to licensed
            markets and NMLS identifiers are displayed where required. Figures
            described as industry data are published third-party sources, named on
            request. No client results, reviews or testimonials are represented on
            this page.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Safary Marketing. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
