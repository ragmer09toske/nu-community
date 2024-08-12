"use client"
import { Content } from '@/components/Content'
import useStore from "@/app/Store"

export default function Homhomee() {
  const loginToken = useStore((state) => state.loginToken)
  console.log("Login token:",loginToken);

  return (
    <main>
        <Content />
    </main>
  )
}
