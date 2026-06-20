import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EducationClient from "./EducationClient";

export const metadata: Metadata = {
  title: "GoviStudio | Operational Intelligence for Institutions",
  description:
    "GoviStudio is the operational layer for institutions. Increase capacity, improve execution, and modernize workflows without replacing the systems you already rely on.",
  openGraph: {
    title: "GoviStudio | Operational Intelligence for Institutions",
    description:
      "Operational intelligence for institutions. Increase capacity, improve execution, and modernize workflows.",
  },
};

export default function EducationPage() {
  return (
    <>
      <Navigation />
      <EducationClient />
      <Footer />
    </>
  );
}
