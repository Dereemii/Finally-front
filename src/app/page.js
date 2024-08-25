import { NavBar } from '@/components/NavBar/NavBar';
import { BaseButton } from '../components/BaseButton/BaseButton';
import { InputLabel } from '../components/InputLabel/InputLabel';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <NavBar />
      <InputLabel label={'¿Cómo quieres que te llamemos? 🙋‍'} />
      <InputLabel label={'¿Cuál es tu edad? 🧐‍'} />
      <InputLabel label={'¿Dónde vives? 📍‍'} />
      <InputLabel label={'¿A que te dedicas? 💼‍'} />
      <InputLabel label={'¿Cuál es tu ingreso líquido? 💵‍'} />
      <div className="fixed bottom-0 left-0 right-0 w-full bg-white p-4">
        <BaseButton text="Continuar" />
      </div>
    </main>
  );
}
