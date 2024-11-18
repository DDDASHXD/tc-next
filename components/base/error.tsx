import React from "react";
import { Badge } from "../ui/badge";

interface iErrorProps {
  error: string | undefined;
}

const Error = ({ error }: iErrorProps) => {
  return (
    <div className="w-screen h-dvh flex items-center justify-center">
      <div className="w-max flex flex-col max-w-screen-sm gap-5">
        <div className="flex flex-col gap-2">
          <Badge variant={"outline"} className="flex gap-2 w-max">
            <div className="size-2 bg-red-500 rounded-full">
              <div className="size-2 bg-red-500 rounded-full animate-ping" />
            </div>
            Error
          </Badge>
          <p className="text-4xl font-medium">An error has ocurred</p>
        </div>
        <pre className="overflow-x-auto bg-secondary p-6 rounded-md border">
          {error}
        </pre>
      </div>
    </div>
  );
};

export default Error;
