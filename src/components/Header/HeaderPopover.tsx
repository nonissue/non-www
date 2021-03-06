import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HeaderLink, HeaderTimeline } from "src/components";

type HeaderDataItem = {
  title: string;
  href: string;
};

type HeaderData = {
  nav: {
    subMenuItems: HeaderDataItem[];
    socialMediaItems: HeaderDataItem[];
  };
};

type HeaderPopoverProps = {
  open: boolean;
  closePopover: () => void;
  data: HeaderData;
};

const HeaderPopover = ({ open, closePopover, data }: HeaderPopoverProps) => {
  return (
    <Transition
      show={open}
      as={Fragment}
      enter="transition ease-in-out duration-200"
      enterFrom="opacity-0 -translate-y-2 "
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0 "
      leaveTo="opacity-0 -translate-y-2"
    >
      <Popover.Panel
        static
        className={`inset-x-0 transform absolute z-20 shadow-lg lg:dark:border-t-2 lg:dark:border-gray-900`}
      >
        <div className="absolute inset-0 flex" aria-hidden="true">
          <div className="bg-white w-1/2 dark:bg-almostblack lg:dark:border-r-2 dark:border-gray-900 border-r-0 " />
          <div className=" w-1/2 dark:bg-almostblack bg-white lg:bg-gray-50" />
        </div>
        <div className="relative max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 pb-2 md:pb-0">
          <nav
            className="grid gap-y-6 md:gap-y-10 px-6 py-4 md:pt-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
            aria-labelledby="site nav"
          >
            <h2 id="solutionsHeading" className="sr-only">
              Site Navigation
            </h2>
            <div>
              <h3 className="text-lg font-semibold">Site</h3>
              <ul className="mt-2 space-y-2 md:space-y-3">
                {data.nav.subMenuItems.map((item) => (
                  <HeaderLink
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    closePopover={closePopover}
                  />
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Connect</h3>
              <ul className="mt-2 space-y-2 md:space-y-3">
                {data.nav.socialMediaItems.map((item) => (
                  <HeaderLink
                    title={item.title}
                    href={item.href}
                    closePopover={closePopover}
                    key={item.title}
                  />
                ))}
              </ul>
            </div>
          </nav>
          {false && (
            <div className="block md:block px-6 py-4 sm:py-12 sm:px-6 lg:px-8 lg:pt-8 xl:pl-12 opacity-100">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <HeaderTimeline />
              <div className="mt-10 text-sm font-medium text-right">
                <a
                  href="#"
                  className=" transition ease-in-out duration-150 dark:text-indigo-300"
                >
                  View more activity <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export { HeaderPopover };
