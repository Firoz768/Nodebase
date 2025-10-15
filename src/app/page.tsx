import { requireAuth } from "@/lib/auth-utils"
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";
const page = async () => {

  await requireAuth();

  const data = await caller.getUsers();
  return (
    
    <div className="min-h-screen min-w-screen flex items-center justify-center" >
        <div>
          {JSON.stringify(data)}
         <LogoutButton/>
        </div>
    </div>


  )
}

export default page