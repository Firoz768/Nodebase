import React from 'react'
import { requireUnauth } from "@/lib/auth-utils";
import { RegisterForm } from "@/features/auth/components/register-form"
const page = async () => {

  await requireUnauth();
  return (
    <RegisterForm />
  )
}

export default page