// app/not-found.tsx
import Container from "@/components/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center">
      <Container>
        <div className="">
          <h1 className="text-4xl font-bold mb-4 text-red-600">
            404 – Page Not Found
          </h1>
          <p className="mb-6">
            Sorry, we couldn’t find the page you were looking for.
          </p>
          <Link href="/" className="text-blue-500 hover:underline">
            Go back to Home
          </Link>
        </div>
      </Container>
    </main>
  );
}
