'use client';
import Head from 'next/head';
import { ChipSelector } from '@/components/ChipSelector/ChipSelector';
import { BaseButton } from '@/components/BaseButton/BaseButton';
import { useRouter } from 'next/navigation';

export default function Traits() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/goals');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white p-4">
      <Head>
        <title>FinAlly</title>
        <meta name="description" content="Página de selección de rasgos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="items-left flex w-full flex-col p-2">
        <h1 className="mt-8 text-2xl">FinAlly</h1>
        <h2 className="text-md mb-2 mt-4 text-left">¿Cómo te percibes como persona? 🤔</h2>
        <p className="mb-7 text-left text-xs">Selecciona 3 rasgos con los que te identifiques</p>
        <ChipSelector />
      </main>

      <BaseButton onClick={() => handleNavigation()} text="Continuar" />
    </div>
  );
}
