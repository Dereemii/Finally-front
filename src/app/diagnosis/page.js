'use client';

import { PieChartCustom } from '@/components/PieChartCustom/PieChartCustom';
import { BaseButton } from '../../components/BaseButton/BaseButton';
import { MainLayout } from '@/Layout/MainLayout';
import { useRouter } from 'next/navigation';

export default function Diagnosis() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/final-diagnosis');
  };

  const payload = JSON.parse(localStorage.getItem('payload'));
  const FinAlly = JSON.parse(localStorage.getItem('FinAlly'));


  return (
    <MainLayout>
      <main className="flex min-h-screen flex-col p-8">
        <p className="pb-2">¡{payload.userInfo.name}!, este es tu diagnóstico 🩺</p>
        <p className="bg-blue-200 p-2 text-sm rounded mb-3">{FinAlly.data.profile}</p>
        {/* <p>{payload.userInfo.goal.objective}</p>
        <p>{payload.userInfo.goal.timeLimit}</p> */}

        {/* <div className="text-xs text-gray-600">Consejos para cumplir tu objetivo</div> */}
        <p></p>
        <div className="fixed bottom-0 left-0 right-0 w-full bg-white p-4">
          <BaseButton onClick={() => handleNavigation()} text="Continuar" />
        </div>
        {/* <PieChartCustom /> */}
      </main>
    </MainLayout>
  );
}
