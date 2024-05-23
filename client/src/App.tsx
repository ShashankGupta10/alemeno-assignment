"use client";
import { useRef, useState } from "react";
import Result from "./components/Result";

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected_file = e.target.files ? e.target.files[0] : null;
    setFile(selected_file)
  };

  return !file ? (
    <main className="flex flex-col items-center justify-center h-[100vh] bg-gray-100 px-4 md:px-6">
      <div className="max-w-xl w-full space-y-6 text-center">
        <h1 className="text-7xl font-bold tracking-tighter text-gray-900">
          Image Color Recognition
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-md block mx-auto">
          Effortlessly extract and visualize dominant colors from any image with our advanced color analysis tool.
          Upload your image and discover its unique color palette in seconds.
        </p>
        <button
          className="bg-black text-white inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 w-full"
          onClick={() => fileInputRef.current?.click()}
        >
          Upload Image
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleChange}
          accept=".png, .jpeg, .jpg, .webp"
          className="hidden"
        />
      </div>
    </main>
  ) : (
    <Result file={file} />
  );
}