import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <h1>This is MealsPage</h1>
      <p>
        <Link href="/meals/random-1">random-1</Link>
        <Link href="/meals/random-2">random-2</Link>
      </p>
    </>
  );
}
