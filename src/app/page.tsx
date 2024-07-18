'use client'

import { Button, Header } from "@/components/ExportComponents/index"
import { JourneyList } from "@/components/Journey/JourneyList";
import { ServicesList } from "@/components/Services/ServicesList";
export default function Home() {
  return (
    <>
      <Header />
      <ServicesList />
      <JourneyList />
    </>
  );
}
