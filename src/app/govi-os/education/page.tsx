import type { Metadata } from 'next';
import Screen01Reality from '@/components/govi-os/Screen01Reality';
import Screen02Pressure from '@/components/govi-os/Screen02Pressure';
import Screen03Workflow from '@/components/govi-os/Screen03Workflow';
import Screen04MeetGovi from '@/components/govi-os/Screen04MeetGovi';
import Screen05Operations from '@/components/govi-os/Screen05Operations';
import Screen06CommandCenter from '@/components/govi-os/Screen06CommandCenter';
import Screen07Outcomes from '@/components/govi-os/Screen07Outcomes';
import Screen08Proof from '@/components/govi-os/Screen08Proof';
import Screen09Future from '@/components/govi-os/Screen09Future';

export const metadata: Metadata = {
  title: 'Govi OS for Education | GoviStudio',
  description:
    'The operational intelligence layer that helps traditional institutions increase operational capacity, improve execution, and modernize workflows without replacing the systems they already rely on.',
};

export default function GoviOSEducationPage() {
  return (
    <main>
      <Screen01Reality />
      <Screen02Pressure />
      <Screen03Workflow />
      <Screen04MeetGovi />
      <Screen05Operations />
      <Screen06CommandCenter />
      <Screen07Outcomes />
      <Screen08Proof />
      <Screen09Future />
    </main>
  );
}
