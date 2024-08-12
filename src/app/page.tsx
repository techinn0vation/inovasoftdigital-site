'use client'

import { Header } from "@/components/ExportComponents/index"
import { Footer } from "@/components/Footer";
import { Form } from "@/components/Form";
import { JourneyList } from "@/components/Journey/JourneyList";
import { OurWorks } from "@/components/OurWorks/WorkMain";
import { Pricing } from "@/components/Pricing";
import { Questions } from "@/components/Questions";
import { ServicesList } from "@/components/Services/ServicesList";
export default function Home() {
  return (
    <>
      <Header />
      <ServicesList />
      <JourneyList />
      <OurWorks />
      <Pricing />
      <Questions />
      <Form />
      <Footer />
    </>
  );
}
