'use client';

import { BaseButton } from '../../components/BaseButton/BaseButton';
import { MainLayout } from '@/Layout/MainLayout';
import { FileUpload } from '@/components/FileUpload/FileUpload';
import { TextArea } from '@/components/TextArea';
import { useRouter } from 'next/navigation';

export default function Uploaded() {
  const router = useRouter();
  const handleNavigation = () => {
    // dpcv
    const payload = {
      userInfo: {
        name: '',
        age: '',
        city: '',
        mail: '',
        occupation: '',
        emotions: '',
        goal: {
          objective: 'dfg',
          timeLimit: 'dfg',
        },
      },
      file: {
        text: '',
        fileName: 'EstadoCuenta.pdf',
        emotion: '',
      },
      income: 0,
    };

    fetch('https://finally-3lt8.onrender.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        console.log('Status:', response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        //localStorage.setItem('FinAlly', JSON.stringify(data));
      })
      .catch((error) => {
        console.error('Error:', error.message);
        console.error('Detalles:', error);
      });

    router.push('/diagnosis');
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
          <FileUpload />
        </div>
        <div className="items-left flex flex-col justify-center pt-20">
          <TextArea label={'¿Qué sientes al revisar tu estado de cuenta?'} />
        </div>
        <div className="fixed bottom-0 left-0 right-0 w-full bg-white p-4">
          <BaseButton onClick={() => handleNavigation()} text="Continuar" />
        </div>
      </main>
    </MainLayout>
  );
}
