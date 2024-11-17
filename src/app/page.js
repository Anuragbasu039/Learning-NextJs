import Image from "next/image";

export default function Home() {
  const User = (props) => {
    return (
      <div>
        <p>Ny Name is {props.name}</p>
      </div>
    );
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <User name="Ankit"/>
        <User name="Anurag"/>
        <User name="Abdul"/>
        <h1>Hello Next Js</h1>
      </main>
    </div>
  );
}
