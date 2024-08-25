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

  return (
    <MainLayout>
      <main className="flex min-h-screen flex-col p-8">
        <div className="fixed bottom-0 left-0 right-0 w-full bg-white p-4">
          <BaseButton onClick={() => handleNavigation()} text="Continuar" />
        </div>
        <PieChartCustom />
      </main>
    </MainLayout>
  );
}
