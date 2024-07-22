'use client'

import { Button, Header } from "@/components/ExportComponents/index"
import { JourneyList } from "@/components/Journey/JourneyList";
import { OurWorks } from "@/components/OurWorks/WorkMain";
import { ServicesList } from "@/components/Services/ServicesList";
export default function Home() {
  return (
    <>
      <Header />
      <ServicesList />
      <JourneyList />
      <OurWorks />
    </>
  );
}
