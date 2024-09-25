export default function Results({ result }) {
  return (
    <div className="text-center text-2xl results">
      {result ? <p>{result}</p> : <p>No result yet!</p>}
    </div>
  );
}
