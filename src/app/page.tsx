import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '@/components/ui/button';

const page = () => {
  const something = true;
  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center'>
      <Button>Click Me</Button>
    </div>
  )
}

export default page