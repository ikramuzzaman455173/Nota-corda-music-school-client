import React from 'react';
import Container from '../SharedComponents/Container';
import ClassCard from './ClassCard';
import InfoText from '../SharedComponents/InfoText';
import UseClass from '../../Hooks/UseAllClass';

const PopularClasses = () => {
  const [allClass] = UseClass();

  // Filter the allClass classes with status === "approved"
  const approvedClasses = allClass.filter(singleClass => singleClass.status === 'approved');

  // Sort approvedClasses based on the "student" field in descending order
  const sortedClasses = approvedClasses.sort((a, b) => b.students - a.students);

  // Get the first six classes
  const firstSixClasses = sortedClasses.slice(0, 6);

  return (
    <div>
      <Container>
        <InfoText title={'our popular classes'} />
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {firstSixClasses.map((singleClass, i) => (
            <ClassCard key={i} singleClass={singleClass} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularClasses;

