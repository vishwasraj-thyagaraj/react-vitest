import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Link from '@/components/link';

test('Link changes the state when hovered', async () => {
  render(<Link page="http://antfu.me">Anthony Fu</Link>)

  debugger
  const link = screen.getByText('Anthony Fu')

  expect(link).toHaveAccessibleName('Link is normal')

  await userEvent.hover(link)
  await expect.poll(() => link).toHaveAccessibleName('Link is hovered')
  await userEvent.unhover(link)
  await expect.poll(() => link).toHaveAccessibleName('Link is normal')
})