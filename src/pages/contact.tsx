'use client'
import LinkTransition from "@/components/LinkTransition"
import Link from "next/link";

export default function Contact() {
  return (
    <>
    <div className="flex flex-col h-screen items-center justify-center bg-amber-300 gap-10">
      <Link href="/work" style={{'viewTransitionName': 'expand'}}>Work</Link>
      <h1 className="text-4xl pageHeader"
        style={{'viewTransitionName': 'inMotion'}}
      >Contact Page</h1>
      <p className="mx-10 pageContent text-center line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna
        auctor, viverra sapien. Donec euismod turpis eget massa lobortis, eget
        scelerisque justo.
      </p>
    </div>
    </>
  );
}