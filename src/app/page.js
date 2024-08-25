import { BaseButton } from '../components/BaseButton/BaseButton';
import { FloatingButton } from '../components/FloatingButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Finally</h1>
      <BaseButton text="holaa" bgColor="bg-success" />
      <FloatingButton />
    </main>
  );
}
