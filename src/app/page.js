'use client';
import { useState } from 'react';
import { BaseButton } from '../components/BaseButton/BaseButton';
import { InputLabel } from '../components/InputLabel/InputLabel';
import { MainLayout } from '@/Layout/MainLayout';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [occupation, setOccupation] = useState('');
  const [income, setIncome] = useState('');

  const handleNavigation = () => {
    const payload = {
      userInfo: {
        name: name,
        age: age,
        city: city,
        mail: 'danielacortezvaras@gmail.com',
        occupation: occupation,
        emotions: 'Angustia',
        goal: {
          objective: '',
          timeLimit: '',
        },
      },
      file: {
        text: '',
        fileName: 'EstadoCuenta.pdf',
        emotion: 'Angustia',
      },
      income: 1000000,
    };
    localStorage.setItem('payload', JSON.stringify(payload));
    router.push('/traits');
  };

  return (
    <MainLayout>
      <main className="flex min-h-screen flex-col items-center p-8">
        <div className="flex w-full flex-col py-3.5">
          <label className="mb-2">¿Cómo quieres que te llamemos? 🙋</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />{' '}
        </div>
        <div className="flex w-full flex-col py-3.5">
          <label className="mb-2">¿Cuál es tu edad? 🧐</label>
          <input value={age} onChange={(e) => setAge(e.target.value)} />{' '}
        </div>
        <div className="flex w-full flex-col py-3.5">
          <label className="mb-2">¿Dónde vives? 📍</label>
          <input value={city} onChange={(e) => setCity(e.target.value)} />{' '}
        </div>
        <div className="flex w-full flex-col py-3.5">
          <label className="mb-2">¿A qué te dedicas? 💼</label>
          <input value={occupation} onChange={(e) => setOccupation(e.target.value)} />{' '}
        </div>
        <div className="flex w-full flex-col py-3.5">
          <label className="mb-2">¿Cuál es tu ingreso líquido? 💵‍</label>
          <input value={income} onChange={(e) => setIncome(e.target.value)} />{' '}
        </div>

        <div className="fixed bottom-0 left-0 right-0 w-full bg-white p-4">
          <BaseButton onClick={() => handleNavigation()} text="Continuar" />
        </div>
      </main>
    </MainLayout>
  );
}
