import MealItem from "./MealItem";
import useHTTP from "./hook/UseHTTP";
const config={method:"GET"}
export default function Meals() {
  // Use object destructuring as the hook returns an object
  const { data, loading, error } = useHTTP(
    "http://localhost:3000/meals",  // Corrected URL
    config,              // Corrected config property
    []
  );

  if (loading) {
    return <p>Fetching meals...</p>;
  }

  if (error) {
    return <p>Something went wrong {error.message || error}</p>;
  }

  return (
    <ul id="meals">
      {data.map((meal) => (
        <MealItem
          meal={meal}
          key={meal.id}
          id={meal.id}
          image={meal.image}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </ul>
  );
}
