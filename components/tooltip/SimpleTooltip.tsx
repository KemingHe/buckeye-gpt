import type { JSX } from 'react';
import { Tooltip } from 'react-tooltip';

export interface SimpleTooltipProps {
  id: string;
}

/**
 * Minimal custom tooltip component.
 *
 * Mimics DaisyUI's dark-themed tooltip.
 *
 * ARIA-compliant as not tabbable and not focusable,
 * but can be displayed on hover for visual users.
 *
 * @param {string} id - The id of the tooltip.
 */
export function SimpleTooltip({ id }: SimpleTooltipProps): JSX.Element {
  return (
    <Tooltip
      id={id}
      style={{
        color: '#a6adbb',
        backgroundColor: '#2a323c',
        fontWeight: '600',
      }}
    />
  );
}
