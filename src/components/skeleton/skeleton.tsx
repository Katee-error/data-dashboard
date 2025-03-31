import { styled } from '@mui/material/styles';

interface SkeletonProps {
  height: number;
}

export const Skeleton = styled('div')<SkeletonProps>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));
