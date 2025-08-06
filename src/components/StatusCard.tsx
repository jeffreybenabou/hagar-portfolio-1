import React from 'react';

interface StatusCardProps {
    icon: React.ReactNode;
    text: string;
}

export const StatusCard: React.FC<StatusCardProps> = ({ icon, text }) => {
  return (
    <div
      className="rounded-[55px] shadow-[2px_2px_36.4px_-10px_rgba(0,0,0,0.07)] flex h-[55px] px-[46px] py-[15px] flex-row items-center justify-center gap-[10px] self-stretch"
    >
      {icon}
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
};
