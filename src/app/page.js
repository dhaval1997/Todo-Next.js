import Todo from "@/components/Todo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-4">Next.js Todo App</h1>
      <Todo/>
    </main>
  );
}
