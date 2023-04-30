import { useMemo } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useDisclosure } from '../../../../hooks';
import { compose } from '../../../../utils';
import { MenuElement } from '../../MenuElement';
import { NavigationSection } from '../../props';
import { MobileMenuSubSection } from '../MobileMenuSubSection';

export interface MobileMenuSectionProps {
  section: NavigationSection;
}

const buttonClasses =
  'flex flex-row justify-between py-3 px-4 my-2 w-full text-left text-gray-500 rounded-md border border-gray-200 border-solid duration-500 cursor-pointer';

export const MobileMenuSection = ({ section }: MobileMenuSectionProps) => {
  const { toggle, isOpen } = useDisclosure();
  const sectionTitle = useMemo(() => {
    if ('path' in section)
      return (
        <Link className="no-underline font-primary-700" to={section.path}>
          {section.title}
        </Link>
      );
    if ('action' in section)
      return (
        <button
          className={buttonClasses}
          onClick={() => {
            section.action();
          }}
        >
          <span>{section.title}</span>
        </button>
      );

    return (
      <button className={buttonClasses} onClick={() => toggle()}>
        <span>{section.title}</span>
        <FiChevronDown
          className={compose(
            'p-0 m-0 w-6 h-6 duration-300',
            isOpen ? 'rotate-180' : 'rotate-0'
          )}
        />
      </button>
    );
  }, [isOpen, section, toggle]);

  return (
    <li key={section.id} className="overflow-hidden h-max">
      {sectionTitle}
      {'items' in section && (
        <div className={compose('overflow-hidden', isOpen ? 'h-max' : 'h-0')}>
          {section?.items?.map((subSectionOrElements, index) =>
            Array.isArray(subSectionOrElements) ? (
              <ul
                key={`${section.id}-${index}`}
                className="overflow-scroll flex-1 pl-0 my-0 list-none"
              >
                {subSectionOrElements.map((element) => (
                  <li className="pl-0 my-1 ml-0 list-none" key={element.id}>
                    <MenuElement key={element.id} element={element} />
                  </li>
                ))}
              </ul>
            ) : (
              <MobileMenuSubSection
                key={subSectionOrElements.id}
                subSection={subSectionOrElements}
              />
            )
          )}
        </div>
      )}
    </li>
  );
};
