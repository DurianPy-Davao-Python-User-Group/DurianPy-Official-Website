import { ClientOnly } from '@tanstack/react-router';
import type React from 'react';
import { default as ReactCountUp, type CountUpProps } from 'react-countup';

export function CountUp(props: CountUpProps) {
  const _CountUp = (ReactCountUp as any)?.default as (
    props: CountUpProps
  ) => React.ReactNode;
  return (
    <ClientOnly>
      <_CountUp {...props} />
    </ClientOnly>
  );
}
