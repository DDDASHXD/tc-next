import { RocketIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";

const Footer = async () => {
  const t = await getTranslations();

  const sections = [
    {
      label: t("footer.follow"),
      links: [
        { label: "Github", href: "" },
        { label: "Twitter", href: "" },
        { label: "Dribbble", href: "" }
      ]
    },
    {
      label: t("footer.platforms"),
      links: [
        { label: "iOS", href: "" },
        { label: "Android", href: "" },
        { label: "Web", href: "" }
      ]
    },
    {
      label: t("footer.about"),
      links: [
        { label: "About", href: "" },
        { label: "Careers", href: "" },
        { label: "Contact", href: "" }
      ]
    },
    {
      label: t("footer.legal"),
      links: [
        { label: "Privacy", href: "" },
        { label: "Terms", href: "" }
      ]
    }
  ];

  return (
    <div className="border-t w-full py-20">
      <div className="flex flex-col w-full max-w-screen-xl mx-auto">
        <div className="flex justify-between items-start">
          <Link
            href="/"
            className="w-full flex justify-start items-center gap-2"
          >
            <RocketIcon />
            <p className="text-2xl font-semibold">{t("nav.label")}</p>
          </Link>
          <div className="flex gap-40">
            {sections.map(({ label, links }) => (
              <div className="flex flex-col gap-2 w-max" key={label}>
                <p className="text-xl font-bold">{label}</p>
                {links.map(({ label, href }, index) => (
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
