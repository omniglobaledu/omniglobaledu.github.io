
import logo from '/assets/logo.png';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logo} alt="Omni Education Logo" className="h-8 w-8" />
      <span className="ml-2 text-xl font-bold"><span className='text-blue-500'>Omni</span> Global</span>
    </div>
  );
}
