import { getTranslations } from "next-intl/server";
import React from "react";

const About = async () => {
  const t = await getTranslations();

  const stats = [
    { number: "2.7K+", label: t("landing.about.users") },
    { number: "1.8K+", label: t("landing.about.subscribers") },
    { number: "112", label: t("landing.about.downloads") },
    { number: "4", label: t("landing.about.products") }
  ];

  return (
    <div className="flex bg-muted/50 border rounded-md w-full max-w-screen-xl mx-auto p-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold">{t("landing.about.title")}</h1>
        <p className="text-muted-foreground text-2xl">
          {t("landing.about.description")}
        </p>
        <div className="flex justify-between items-center">
          {stats.map(({ number, label }, index) => (
            <div className="flex flex-col items-center" key={index}>
              <p className="text-4xl font-bold">{number}</p>
              <p className="text-xl text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
