'use client';
import { BaseButton } from '../components/BaseButton/BaseButton';
import { InputLabel } from '../components/InputLabel/InputLabel';
import { MainLayout } from '@/Layout/MainLayout';
import { useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter();

  const handleNavigation = () => {
    router.push('/traits');
  };

  return (
    <MainLayout>
      <main className="flex min-h-screen flex-col items-center p-8">
        <InputLabel label={'¿Cómo quieres que te llamemos? 🙋‍'} />
        <InputLabel label={'¿Cuál es tu edad? 🧐‍'} />
        <InputLabel label={'¿Dónde vives? 📍‍'} />
        <InputLabel label={'¿A qué te dedicas? 💼‍'} />
        <InputLabel label={'¿Cuál es tu ingreso líquido? 💵‍'} />
        <div className="fixed bottom-0 left-0 right-0 w-full bg-white p-4">
          <BaseButton onClick={() => handleNavigation()} text="Continuar" />
        </div>
      </main>
    </MainLayout>
  );
}
