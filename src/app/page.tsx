import Image from "next/image";

// app/page.tsx
export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-medium font-sans-serif">
        Gabriel Santos |{' '}
        <b className="font-sans">Software Developer Trainee</b>
      </h1>

      <div className="flex gap-4 mt-2">
        {/* seus componentes */}
      </div>

      <section className="mt-16">
        <strong className="text-4xl font-sans-serif">Projects</strong>
      </section>
    </>
  )
}
