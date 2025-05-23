'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Specialty } from '../types';

interface SpecialtyDetailProps {
  specialty: Specialty;
  onClose: () => void;
}

export default function SpecialtyDetail({ specialty, onClose }: SpecialtyDetailProps) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <span className="text-2xl">&times;</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-full">
            <Image
              src={specialty.image}
              alt={specialty.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">{specialty.name}</h2>
            <p className="text-gray-600">{specialty.description}</p>
            
            <div className="space-y-2">
              <p className="font-semibold">Doctor:</p>
              <p className="text-gray-600">{specialty.doctor}</p>
              
              <p className="font-semibold">Location:</p>
              <p className="text-gray-600">{specialty.location}</p>
            </div>

            <button
              onClick={() => router.push('/appointment')}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
