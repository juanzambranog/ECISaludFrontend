export interface Specialty {
  id: string;
  name: string;
  image: string;
  description: string;
  doctor: string;
  location: string;
}

export interface Appointment {
  id: string;
  specialty: string;
  date: string;
  status: 'Confirmed' | 'Rejected';
  patientName: string;
  patientId: string;
  email: string;
  doctor: string;
  location: string;
}
