'use client';
import { FloatingButton } from '@/components/FloatingButton';
import { BaseButton } from '../../components/BaseButton/BaseButton';
import { MainLayout } from '@/Layout/MainLayout';
import { useRouter } from 'next/navigation';

export default function Upload() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/uploaded');
  };

  return (
    <MainLayout>
      <main className="flex min-h-screen flex-col p-8">
        <h2 className="text-md mb-2 mt-4 text-left">
          Súbenos el estado de cuenta de la tarjetas que ocupas frecuentemente.
        </h2>
        <p className="mb-7 text-left text-xs text-gray-600">
          Con esto te ayudaremos a cumplir tu objetivo 🚀
        </p>

        <div className="flex flex-col items-center justify-center pt-20">
          <h2 className="text-md mb-2 mt-4 text-center text-gray-500">Subir archivo</h2>
          <FloatingButton />
        </div>
        <div className="fixed bottom-0 left-0 right-0 w-full bg-white p-4">
          <BaseButton onClick={() => handleNavigation()} text="Continuar" />
        </div>
      </main>
    </MainLayout>
  );
}
