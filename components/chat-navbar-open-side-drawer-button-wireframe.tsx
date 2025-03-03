import { Bars3Icon } from '@heroicons/react/20/solid';
import type { JSX } from 'react';

import { SimpleTooltip } from '@/components/tooltip';
import type { OpenSideDrawerButtonWireframeProps } from '@/types/chat-navbar-props';

export const OpenSideDrawerButtonWireframe = ({
  sideDrawerSectionId,
  isSideDrawerOpen,
  openSideDrawer,
}: OpenSideDrawerButtonWireframeProps): JSX.Element => {
  const tooltipId: string = 'open-side-drawer-tooltip';
  return (
    <>
      <button
        className="btn btn-sm btn-square btn-neutral lg:hidden"
        type="button"
        onClick={openSideDrawer}
        aria-controls={sideDrawerSectionId}
        aria-expanded={isSideDrawerOpen}
        aria-label="Open side bar"
        data-tooltip-id={tooltipId}
        data-tooltip-content="Open side bar"
        data-tooltip-place="bottom-start"
      >
        <Bars3Icon className="size-5" aria-hidden="true" />
      </button>
      <SimpleTooltip id={tooltipId} />
    </>
  );
};
