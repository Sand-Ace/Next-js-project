export default function SlugPage({ params }) {
  return (
    <>
      <h1>MEAL DETAILS</h1>
      <p>{params.mealslug}</p>
    </>
  );
}
