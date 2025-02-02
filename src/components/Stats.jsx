export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your cart 🥑</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to check out"
          : `🛒 You have ${numItems} items on your list, and you have already picked up ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
