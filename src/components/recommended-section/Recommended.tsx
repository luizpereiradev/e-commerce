import RecommendedCard from "./RecommendedCard";

export default function Recommended() {
  return (
    <div>
      <h1 className="font-medium text-xl p-4 lg:px-0">Recommended items</h1>
      <div className="grid gap-3 lg:gap-x-5 w-full grid-auto-fit-[165px] lg:grid-auto-fit-[240px]">
      {Array(8)
        .fill("")
        .map(() => (
            <RecommendedCard />
            ))}
      </div>
    </div>
  );
}
