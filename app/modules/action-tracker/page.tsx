import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ActionTrackerPage from "@/components/sections/ActionTrackerPage";

export const metadata: Metadata = {
  title: "Action Tracker — Turn Findings Into Results | EHSWatch",
  description:
    "EHSWatch Action Tracker gives every corrective and preventive action a clear owner, a firm deadline and a transparent audit trail. Stop chasing actions. Start closing them.",
};

export default function ActionTrackerRoute() {
  return (
    <>
      <Navbar lightHero />
      <main>
        <ActionTrackerPage />
      </main>
      <Footer />
    </>
  );
}
