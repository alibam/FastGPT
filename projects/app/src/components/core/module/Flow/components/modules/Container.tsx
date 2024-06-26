import React from 'react';
import { Box } from '@chakra-ui/react';
import { BoxProps } from '@chakra-ui/react';

const Container = ({ children, ...props }: BoxProps) => {
  return (
    <Box px={'16px'} py={'10px'} position={'relative'} {...props}>
      {children}
    </Box>
  );
};

export default React.memo(Container);
