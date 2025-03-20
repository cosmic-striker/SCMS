export interface Student {
  id: string;
  name: string;
  email: string;
  attendance: number;
  performance: number;
  avatar: string;
}

export interface Resource {
  id: string;
  name: string;
  type: 'projector' | 'computer' | 'smartboard';
  status: 'available' | 'in-use' | 'maintenance';
  location: string;
}

export interface Alert {
  id: string;
  type: 'emergency' | 'security' | 'maintenance';
  message: string;
  timestamp: Date;
  status: 'active' | 'resolved';
}