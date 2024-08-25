'use client';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { BaseButton } from '@/components/BaseButton/BaseButton';
import { InputLabel } from '@/components/InputLabel/InputLabel';
import { NavBar } from '@/components/NavBar/NavBar';
import { useRouter } from 'next/navigation';

export default function Goals() {
  const router = useRouter();
  const [objective, setObjective] = useState('');
  const [timeLimit, setTimeLimit] = useState('');

  const handleNavigation = () => {
    console.log(objective);
    let payload = localStorage.getItem('payload');
    payload = JSON.parse(payload);

    if (payload) {
      payload.userInfo.goal.objective = objective;
      payload.userInfo.goal.timeLimit = timeLimit;
      localStorage.setItem('payload', JSON.stringify(payload));
    }

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
        <div className="flex w-full flex-col py-3.5">
          <label className="mb-2">¿Cuál es el objetivo que quieres cumplir?</label>
          <input
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            placeholder={'Asistir al Lollapalooza'}
          />{' '}
        </div>

        <div className="flex w-full flex-col py-3.5">
          <label className="mb-2">Indícanos un plazo</label>
          <input
            value={timeLimit}
            onChange={(e) => setTimeLimit(e.target.value)}
            placeholder={'6 meses'}
          />{' '}
        </div>
      </main>
      <BaseButton onClick={handleNavigation} text="Continuar" />
    </div>
  );
}
