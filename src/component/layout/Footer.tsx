import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/container";

const services = [
  { label: "Business Websites", href: "/services/business-websites" },
  { label: "E-commerce Websites", href: "/services/ecommerce" },
  { label: "Company Websites", href: "/services/company-websites" },
  { label: "Custom Software", href: "/services/custom-software" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <Container>
         <div className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight text-white"
            >
              Presh<span className="text-yellow-400">Dev</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Digital solutions built around your business. We design and
              develop modern websites and software that help businesses grow.
            </p>

            <Link
              href="/start-project"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-yellow-300"
            >
              Start Your Project
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h2>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 transition-colors hover:text-yellow-400"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h2>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-yellow-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Presh Dev. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-slate-300"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-slate-300"
            >
              Terms
            </Link>
          </div>
        </div>
        </div>
      </Container>
    </footer>
  );
}