import { redirect } from "next/navigation";

export default function Home() {
  // Instantly sends anyone who lands on your home URL straight to the Dashboard
  redirect("/dashboard");
}