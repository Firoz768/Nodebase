// import { requireAuth } from "@/lib/auth-utils"
// import { caller } from "@/trpc/server";
"use client"
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LogoutButton } from "./logout";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
const page =  () => {


  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const testAi =  useMutation(trpc.testAi.mutationOptions({
    onSuccess : () =>{
      toast.success("AI Job Queued");
    }
  }));

  const {data} = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess : () =>{
      toast.success("Job Queued");
    }
  }));
  return (
    
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6" >
        <div>
          {JSON.stringify(data)}
        </div>
        <Button disabled={testAi.isPending} onClick={()=> testAi.mutate()} >
          Test Ai
        </Button>
        <Button disabled={create.isPending} onClick={() => create.mutate()} >
        Create WorkFlow
        </Button>
         <LogoutButton/>
    </div>


  )
}

export default page