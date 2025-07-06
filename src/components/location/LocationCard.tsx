import React from 'react';

type Location = {
  title: string;
  addressLine1?: string;
  addressLine2?: string;
  phone?: string | null;
  email?: string | null;
};

const locations: Location[] = [
  {
    title: 'InsurTech Nepal HQ',
    addressLine1: 'IT Plaza, Putalisadak',
    addressLine2: 'Kathmandu, Bagmati Province, Nepal',
    phone: '+977-1-5900000',
    email: 'info@insurtechnepal.com',
  },
  {
    title: 'Kathmandu Office',
    addressLine1: 'XYZ Marg, Thamel',
    addressLine2: 'Kathmandu, Bagmati Province',
    phone: '+977-1-XXXXXXX',
    email: 'ktm@example.com',
  },
  {
    title: 'Pokhara Branch',
    addressLine1: 'ABC Road, Lakeside',
    addressLine2: 'Pokhara, Gandaki Province',
    phone: '+977-61-YYYYYYY',
    email: 'pkr@example.com',
  },
  {
    title: 'Butwal Sub-Office',
    addressLine1: 'PQR Chowk, Traffic Mode',
    addressLine2: 'Butwal, Lumbini Province',
    phone: '+977-71-ZZZZZZZ',
    email: 'btw@example.com',
  },
  {
    title: 'UAE',
    addressLine1: 'Business Center 1, M Floor, The Meydan Hotel',
    addressLine2: 'Nad, Al Sheba, Dubai',
    phone: '+971-569-136-243',
    email: null,
  },
  {
    title: 'PAK',
    addressLine1: 'Building # 15, Civic Centre Block D 2, Phase 1',
    addressLine2: 'Johar Town, Lahore',
    phone: null,
    email: null,
  },
  {
    title: 'USA',
    addressLine1: '30 N Gould St Suite R, Sheridan, WY 82801',
    addressLine2: 'United States',
    phone: '+1-267-800-0191',
    email: null,
  },
];

const LocationCards: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Global Presence</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-[#2b0569] mb-3">{location.title}</h3>
              {location.addressLine1 && <p className="text-gray-600 text-sm">{location.addressLine1}</p>}
              {location.addressLine2 && <p className="text-gray-600 text-sm mb-2">{location.addressLine2}</p>}
              {location.phone && <p className="text-gray-700 text-sm">📞 {location.phone}</p>}
              {location.email && <p className="text-gray-700 text-sm">✉️ {location.email}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationCards;
