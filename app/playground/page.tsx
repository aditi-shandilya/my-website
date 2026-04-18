import TreeDemo from "../components/tree/TreeDemo";

export default function Playground() {
  return (
    <div className="px-6 pt-16">
      <h1 className="text-3xl font-semibold text-neutral-900">
        playground
      </h1>

      <p className="mt-4 text-neutral-600">
        experiments, visuals, and random things i’m building.
      </p>

      <TreeDemo />
    </div>
  );
}