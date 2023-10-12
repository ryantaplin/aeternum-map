import { Box } from '@mantine/core';
import type { ReactNode } from 'react';
import { isEmbed } from '../../utils/routes';
import { useSettingsStore } from '../../utils/settingsStore';
import useActive from './useActive';

type FadingBoxProps = {
  left?: number | string;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  zIndex?: number;
  children: ReactNode;
  fadeFrom: 'top' | 'right' | 'left' | 'bottom';
  className?: string;
  dynamic?: boolean;
};

const FadingBox = ({
  children,
  zIndex = 1,
  fadeFrom,
  className,
  dynamic,
  left,
  ...props
}: FadingBoxProps) => {
  const active = useActive();
  const autoFade = useSettingsStore((state) => state.autoFade);
  const section = useSettingsStore((state) => state.section);

  const dynamicLeft =
    dynamic &&
    section &&
    left &&
    window.matchMedia('(min-width: 1150px)').matches
      ? +left + 500
      : left;
  return (
    <Box
      sx={{
        transition: '0.5s all',
        transitionDelay: '0s',
        position: 'fixed',
        zIndex,
        left: dynamicLeft,
        ...props,
      }}
      style={
        !isEmbed && !active && autoFade
          ? {
              [fadeFrom]: '-120px',
              transitionDelay: '1.5s',
            }
          : {}
      }
      className={className}
    >
      {children}
    </Box>
  );
};

export default FadingBox;
