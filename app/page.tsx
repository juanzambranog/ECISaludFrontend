'use client';
import { useState } from 'react';
import SpecialtyCard from './components/SpecialtyCard';
import SpecialtyDetail from './components/SpecialtyDetail';
import { Specialty } from './types';

const specialties: Specialty[] = [
  {
    id: '1',
    name: 'General Medicine',
    image: 'https://placehold.co/800x600/png?text=General+Medicine',
    description: 'Comprehensive medical care for patients of all ages. Our general medicine specialists provide preventive care, treat acute illnesses, and manage chronic conditions.',
    doctor: 'Dr. John Smith',
    location: 'Main Clinic - Floor 1'
  },
  {
    id: '2',
    name: 'Psychology',
    image: 'https://placehold.co/800x600/png?text=Psychology',
    description: 'Professional mental health care services. Our psychology department offers counseling, therapy, and support for various mental health conditions.',
    doctor: 'Dr. Sarah Johnson',
    location: 'Wellness Center - Floor 2'
  },
  {
    id: '3',
    name: 'Orthopedics',
    image: 'https://placehold.co/800x600/png?text=Orthopedics',
    description: 'Specialized care for musculoskeletal conditions. Our orthopedic team treats bone, joint, and muscle disorders with both surgical and non-surgical approaches.',
    doctor: 'Dr. Michael Brown',
    location: 'Medical Tower - Floor 3'
  },
  {
    id: '4',
    name: 'Dentistry',
    image: 'https://placehold.co/800x600/png?text=Dentistry',
    description: 'Complete dental care services. Our dental specialists provide preventive care, cosmetic procedures, and treatment for oral health conditions.',
    doctor: 'Dr. Emily Davis',
    location: 'Dental Center - Floor 1'
  }
];

export default function Home() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">Our Medical Specialties</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {specialties.map((specialty) => (
            <SpecialtyCard
              key={specialty.id}
              specialty={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
            />
          ))}
        </div>

        {selectedSpecialty && (
          <SpecialtyDetail
            specialty={selectedSpecialty}
            onClose={() => setSelectedSpecialty(null)}
          />
        )}
      </div>
    </div>
  );
}
