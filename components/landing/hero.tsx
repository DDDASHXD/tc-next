import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import heroimg from "./hero_img.jpg";
import { getTranslations } from "next-intl/server";

const Hero = async () => {
  const t = await getTranslations();
  return (
    <div className="w-full max-w-screen-xl mx-auto py-10 h-max ">
      <div className="flex items-center gap-10">
        <div className="flex flex-col w-full gap-7">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold">{t("landing.title")}</h1>
            <p className="text-xl text-muted-foreground w-3/4">
              {t("landing.description")}
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="w-max">{t("landing.cta")}</Button>
            <Button className="w-max" variant={"secondary"}>
              {t("landing.cta2")}
            </Button>
          </div>
        </div>
        <div className="flex w-full h-[30rem]">
          <Image
            src={heroimg}
            alt="hero"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
