import React from 'react'
import { Submit } from '../../../components/ItemContact/style'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

import ItemContact from '../../../components/ItemContact'
import Observation from '../../../components/ItemContact/obs'

export default function Contact() {
  return (
    <>
        <ItemContact />
        <div>
                <div>
                <Observation label="" tipo="" valor="teste" />
                <Link href="/">
                  <Submit>Submit!<FaArrowRight /></Submit>
                </Link>
                </div>
        </div>
    </>
  )
}