'use client';

import Head from 'next/head';
import { useRouter } from 'next/navigation';

import { BaseButton } from '@/components/BaseButton/BaseButton';
import { InputLabel } from '@/components/InputLabel/InputLabel';
import { NavBar } from '@/components/NavBar/NavBar';
import { MultiText } from '@/components/MultiText/MultiText';

const exampleTexts = [
  'Javiera, viajó a Indonesia  🌴 disminuyendo su gasto en ropa.',
  'Laura, fué al concierto de Taylor Swift 🦋 ',
  'Gonzalo, se compró un auto 🚗',
  'Javiera, viajó a Indonesia 🌴',
  'Gonzalo, se compró un auto 🚗',
];

export default function Goals() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/upload');
  };

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
        <section>
          <MultiText texts={exampleTexts} />
        </section>
      </main>
      <BaseButton onClick={() => handleNavigation()} text="Continuar" />
    </div>
  );
}
