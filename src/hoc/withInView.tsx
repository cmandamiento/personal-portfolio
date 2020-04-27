import React from 'react';
import { useInView } from 'react-intersection-observer';

const withInView = (Component: React.ComponentType) => (props: any) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <Component {...props} inView={inView} />
    </div>
  );
};

export default withInView;
