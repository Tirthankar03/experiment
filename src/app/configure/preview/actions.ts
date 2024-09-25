'use server'

import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products"
import { db } from "@/db"



export const createCheckoutSession = async ({
    configId,
  }: {
    configId: string
  }) => {

    const configuration = await db.configuration.findUnique({
        where: { id: configId },
      })


    if (!configuration) {
    throw new Error('No such configuration found')
    }

    //const user = await getUser()
    //user needs to login else we don't create the checkout session
    const user = null 

    if (!user) {
        throw new Error('You need to be logged in')
      }

    const { finish, material } = configuration



  let price = BASE_PRICE
  if (finish === 'textured') price += PRODUCT_PRICES.finish.textured
  if (material === 'polycarbonate')
    price += PRODUCT_PRICES.material.polycarbonate


  }