import Head from 'next/head';
import { BaseButton } from '@/components/BaseButton/BaseButton';
import { InputLabel } from '@/components/InputLabel/InputLabel';
import { NavBar } from '@/components/NavBar/NavBar';

export default function Goals() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white p-4">
      <Head>
        <title>FinAlly</title>
        <meta name="description" content="Página de selección de rasgos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="items-left flex w-full flex-col p-2">
        <NavBar />
        <InputLabel
          label={'¿Cúal es el objetivo que quieres cumplir?‍'}
          placeholder={'Asistir al Lollapalooza'}
        />
        <InputLabel label={'Indícanos un plazo'} placeholder={'6 meses'} />
      </main>
      <BaseButton text="Continuar" />
    </div>
  );
}
