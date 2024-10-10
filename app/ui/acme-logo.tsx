import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusit } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusit} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[25px]">Meerkat Corp</p>
    </div>
  );
}
