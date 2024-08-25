import { NavBar } from '@/components/NavBar/NavBar';
import { BaseButton } from '../components/BaseButton/BaseButton';
import { InputLabel } from '../components/InputLabel/InputLabel';
import { MainLayout } from '@/Layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <InputLabel label={'¿Cómo quieres que te llamemos? 🙋‍'} />
        <InputLabel label={'¿Cuál es tu edad? 🧐‍'} />
        <InputLabel label={'¿Dónde vives? 📍‍'} />
        <InputLabel label={'¿A que te dedicas? 💼‍'} />
        <InputLabel label={'¿Cuál es tu ingreso líquido? 💵‍'} />
        <BaseButton text="Continuar" />
      </main>
    </MainLayout>
  );
}
