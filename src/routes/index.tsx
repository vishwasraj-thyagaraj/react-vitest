import { createFileRoute } from '@tanstack/react-router';
import Button from '@/components/button';

export const Route = createFileRoute('/')({
  component: () => <div><Button/></div>,
});
