'use client';
import Image from 'next/image';
import { Specialty } from '../types';

interface SpecialtyCardProps {
  specialty: Specialty;
  onClick: () => void;
}

export default function SpecialtyCard({ specialty, onClick }: SpecialtyCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image
          src={specialty.image}
          alt={specialty.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center">{specialty.name}</h3>
      </div>
    </div>
  );
}
