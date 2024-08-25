import { BaseButton } from '../components/BaseButton/BaseButton';
import { InputLabel } from '../components/InputLabel/InputLabel';
import { Chip } from '../components/Chip/Chip';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Finally</h1>
      <BaseButton text="holaa" bgColor="bg-success" />
      <InputLabel label={'¿Cómo quieres que te llamemos? 🙋‍'} />
      <Chip label="Ansioso" />
      <Chip label="Relajado" />
    </main>
  );
}
