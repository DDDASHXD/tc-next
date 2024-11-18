"use client";

import useSetup from "@/stores/setup.store";
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import React from "react";
import Error from "@/components/base/error";

// Initialize Query Client
const queryClient = new QueryClient();

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GetSetup>{children}</GetSetup>
    </QueryClientProvider>
  );
};

export default ClientProvider;

const GetSetup = ({ children }: { children: React.ReactNode }) => {
  const { updateSetup } = useSetup();
  const { isPending, error, data } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/setup`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
          }
        }
      );
      return await response.data.data;
    }
  });

  React.useEffect(() => {
    updateSetup(data);
  }, [data, updateSetup]);

  if (isPending)
    return (
      <div className="w-full h-dvh flex items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    );

  if (error) return <Error error={error.stack} />;

  return <>{children}</>;
};
