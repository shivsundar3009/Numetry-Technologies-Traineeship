import React, { useState } from 'react';
import { FaBars, FaTimes, FaAngleDown, FaAngleRight } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState({});

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleNested = (key) => {
    setNestedOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderNestedItems = (items, level = 1) => {
    const bgColor = level === 1 ? 'bg-orange-500' :
                    level === 2 ? 'bg-gray-700' :
                    level === 3 ? 'bg-gray-600' : 'bg-gray-500';

    return (
      <div className={`pl-${level * 4} ${bgColor}`}>
        {items.map((item, index) => (
          <div key={index}>
            {item.subItems ? (
              <>
                <button
                  onClick={() => toggleNested(item.label)}
                  className="w-full text-left px-4 py-2 focus:outline-none flex items-center justify-between"
                >
                  {item.label}
                  {nestedOpen[item.label] ? <FaAngleDown /> : <FaAngleRight />}
                </button>
                {nestedOpen[item.label] && renderNestedItems(item.subItems, level + 1)}
              </>
            ) : (
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">{item.label}</a>
            )}
          </div>
        ))}
      </div>
    );
  };

  const sidebarItems = [
    {
      label: 'Courses',
      subItems: [
        {
          label: 'Math',
          subItems: [
            { label: 'Algebra' },
            { label: 'Geometry' },
            { label: 'Calculus' },
          ],
        },
        {
          label: 'Science',
          subItems: [
            { label: 'Physics' },
            { label: 'Chemistry' },
            { label: 'Biology' },
          ],
        },
      ],
    },
    {
      label: 'Departments',
      subItems: [
        {
          label: 'Humanities',
          subItems: [
            { label: 'History' },
            { label: 'Literature' },
          ],
        },
        {
          label: 'Sciences',
          subItems: [
            { label: 'Physics Department' },
            { label: 'Chemistry Department' },
          ],
        },
      ],
    },
    {
      label: 'Students',
      subItems: [
        { label: 'Student List' },
        { label: 'Student Enrollment' },
      ],
    },
    {
      label: 'Teachers',
      subItems: [
        { label: 'Teacher List' },
        { label: 'Teacher Assignments' },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen">
      <div className={`bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-16'} duration-300 flex flex-col`}>
        <button onClick={toggleSidebar} className="p-4 focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <nav className={`mt-4 flex-grow ${isOpen ? 'block' : 'hidden'}`}>
          {renderNestedItems(sidebarItems)}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
