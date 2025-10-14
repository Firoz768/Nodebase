import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '@/components/ui/button';
import prisma from '@/lib/db';

const page = async () => {
  const users = await prisma.user.findMany();
  const something = true;
  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center'>
        {JSON.stringify(users)}
      </div>
  )
}

export default page