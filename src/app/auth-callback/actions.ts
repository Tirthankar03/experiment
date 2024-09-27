'use server'

import { db } from '@/db'
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { getSession } from "@/lib/getSession";

export const getAuthStatus = async () => {

  const session = await getSession();

  const user = session?.user;

  if (!user?.id || !user.email) {
    throw new Error('Invalid user data')
  }

  const existingUser = await db.user.findFirst({
    where: { id: user.id },
  })

  if (!existingUser) {
    // await db.user.create({
    //   data: {
    //     id: user.id,
    //     email: user.email,
    //   },
    // })
    return {success: false}
  }

  return { success: true }
}
