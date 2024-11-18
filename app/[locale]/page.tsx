import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
import heroimg from "../../components/landing/hero_img.jpg";
import { Button } from "@/components/ui/button";

const page = async () => {
  const t = await getTranslations();
  return (
    <div className="w-full max-w-screen-xl m-auto py-10">
      <div className="flex items-center gap-10">
        <div className="flex flex-col w-full gap-7">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold">{t("landing.title")}</h1>
            <p className="text-lg text-muted-foreground w-3/4">
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

export default page;
