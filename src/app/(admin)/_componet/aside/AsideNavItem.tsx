import React from 'react';

type AsideNavItemProps = {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

const AsideNavItem: React.FC<AsideNavItemProps> = ({ icon, label, isActive, onClick }) => {
  const colorClass = isActive ? 'text-blue-500' : 'text-gray-500';

  return (
    <li
      onClick={onClick}
      className={`h-8 w-fit flex space-x-4 items-center cursor-pointer hover:text-blue-500 group ${colorClass}`}
    >
      <div className="size-5 text-inherit">
        {icon}
      </div>
      <p className="capitalize font-medium text-md">
        {label}
      </p>
    </li>
  );
};

export default AsideNavItem;
