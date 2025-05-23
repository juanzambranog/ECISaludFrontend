'use client';
import { useState } from 'react';
import AppointmentCard from '../components/AppointmentCard';
import { Appointment } from '../types';

// Mock data - in a real app this would come from an API
const mockAppointments: Appointment[] = [
  {
    id: 'APT001',
    specialty: 'General Medicine',
    date: '2024-02-15',
    status: 'Confirmed',
    patientName: 'John Doe',
    patientId: '123456789',
    email: 'john@example.com',
    doctor: 'Dr. John Smith',
    location: 'Main Clinic - Floor 1'
  },
  {
    id: 'APT002',
    specialty: 'Dentistry',
    date: '2024-02-16',
    status: 'Rejected',
    patientName: 'Jane Smith',
    patientId: '987654321',
    email: 'jane@example.com',
    doctor: 'Dr. Emily Davis',
    location: 'Dental Center - Floor 1'
  }
];

export default function HistoryPage() {
  const [statusFilter, setStatusFilter] = useState<'all' | 'Confirmed' | 'Rejected'>('all');

  const filteredAppointments = mockAppointments.filter(appointment => 
    statusFilter === 'all' ? true : appointment.status === statusFilter
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Appointment History</h1>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Filter by status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as 'all' | 'Confirmed' | 'Rejected')}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="all">All</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                appointment={appointment}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No appointments found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
