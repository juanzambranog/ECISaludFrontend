import { Appointment } from '../types';
import StatusBadge from './StatusBadge';

interface AppointmentCardProps {
  appointment: Appointment;
}

export default function AppointmentCard({ appointment }: AppointmentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">
            {appointment.specialty}
          </h3>
          <p className="text-gray-600 text-sm">
            ID: {appointment.id}
          </p>
        </div>
        <StatusBadge status={appointment.status} />
      </div>

      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Date</p>
            <p className="font-medium">{appointment.date}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Doctor</p>
            <p className="font-medium">{appointment.doctor}</p>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm text-gray-500">Location</p>
          <p className="font-medium">{appointment.location}</p>
        </div>

        <div className="pt-2 border-t border-gray-200 mt-4">
          <p className="text-sm text-gray-500">Patient Information</p>
          <p className="font-medium">{appointment.patientName}</p>
          <p className="text-sm text-gray-600">ID: {appointment.patientId}</p>
          <p className="text-sm text-gray-600">{appointment.email}</p>
        </div>
      </div>
    </div>
  );
}
