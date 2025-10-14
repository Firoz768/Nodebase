import { getQueryClient,trpc } from "@/trpc/server";
import Client from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions())
  return (
    <HydrationBoundary state={dehydrate(queryClient)} >
      <Client/>
    </HydrationBoundary>
    
  )
}

export default page