import pandasLogo from "@/assets/skill-icons/pandas.svg";
import numpyLogo from "@/assets/skill-icons/numpy.svg";
import mysqlLogo from "@/assets/skill-icons/mysql.svg";
import scikitLearnLogo from "@/assets/skill-icons/scikitlearn.svg";
import ollamaLogo from "@/assets/skill-icons/ollama.svg";
import plotlyLogo from "@/assets/skill-icons/plotly.svg";
import pythonLogo from "@/assets/skill-icons/python.svg";

function ExcelIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#217346" />
      <path d="M6 4L11.5 12L6 20H9L12.5 14.5L16 20H19L14 12L19 4H16L12.5 9.5L9 4H6Z" fill="white" />
    </svg>
  );
}

function PowerBIIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pbiTall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E6A019" />
          <stop offset="100%" stopColor="#C87E10" />
        </linearGradient>
        <linearGradient id="pbiMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2C544" />
          <stop offset="100%" stopColor="#E6A019" />
        </linearGradient>
        <linearGradient id="pbiShort" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBE38E" />
          <stop offset="100%" stopColor="#F2C544" />
        </linearGradient>
      </defs>
      <rect x="15.5" y="2" width="6.5" height="20" rx="1.2" fill="url(#pbiTall)" />
      <rect x="8.75" y="6" width="6.5" height="16" rx="1.2" fill="url(#pbiMid)" />
      <rect x="2" y="10" width="6.5" height="12" rx="1.2" fill="url(#pbiShort)" />
    </svg>
  );
}

function VSCodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="vscMask" x="0" y="0" width="100" height="100" maskUnits="userSpaceOnUse">
        <path fillRule="evenodd" clipRule="evenodd" d="M70.9119 99.3171C72.4869 99.9307 74.2828 99.8914 75.8725 99.1264L96.4608 89.2197C98.6242 88.1787 100 85.9892 100 83.5872V16.4133C100 14.0113 98.6243 11.8218 96.4609 10.7808L75.8725 0.873756C73.7862 -0.130129 71.3446 0.11576 69.5135 1.44695C69.252 1.63711 69.0028 1.84943 68.769 2.08341L29.3551 38.0415L12.1872 25.0096C10.5891 23.7965 8.35727 23.8959 6.87383 25.2461L1.36558 30.2606C-0.452601 31.9159 -0.454643 34.7715 1.36111 36.4295L16.2034 50.0001L1.36111 63.5706C-0.454643 65.2286 -0.452601 68.0842 1.36558 69.7396L6.87383 74.754C8.35727 76.1042 10.5891 76.2036 12.1872 74.9905L29.3551 61.9587L68.769 97.9167C69.3925 98.5406 70.1246 99.0104 70.9119 99.3171ZM75.0152 27.2989L45.1091 50.0001L75.0152 72.7012V27.2989Z" fill="white" />
      </mask>
      <g mask="url(#vscMask)">
        <path d="M96.4614 10.7962L75.8569 0.875804C73.4719 -0.272365 70.6217 0.211701 68.7491 2.08327L1.29799 63.5706C-0.516907 65.2286 -0.514845 68.0841 1.30247 69.7395L6.81406 74.754C8.29842 76.1042 10.5316 76.2036 12.1307 74.9905L93.3795 13.3699C96.106 11.3026 100 13.2462 100 16.6638V16.4257C100 14.0244 98.6246 11.8375 96.4614 10.7962Z" fill="#0065A9"/>
        <path d="M96.4614 89.2038L75.8569 99.1242C73.4719 100.272 70.6217 99.7883 68.7491 97.9167L1.29799 36.4294C-0.516907 34.7714 -0.514845 31.9159 1.30247 30.2605L6.81406 25.246C8.29842 23.8958 10.5316 23.7964 12.1307 25.0095L93.3795 86.6301C96.106 88.6974 100 86.7538 100 83.3362V83.5743C100 85.9756 98.6246 88.1625 96.4614 89.2038Z" fill="#007ACC"/>
        <path d="M75.8578 99.1265C73.4721 100.274 70.6219 99.7891 68.749 97.9166C71.0566 100.224 75 98.5895 75 95.3261V4.67389C75 1.41051 71.0566 -0.224062 68.749 2.08334C70.6219 0.210884 73.4721 -0.273826 75.8578 0.873665L96.4587 10.7807C98.6234 11.8217 100 14.0112 100 16.4132V83.5871C100 85.9891 98.6234 88.1786 96.4586 89.2196L75.8578 99.1265Z" fill="#1F9CF0"/>
      </g>
    </svg>
  );
}

function MatplotlibIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="128" cy="128" r="115" fill="#FFFFFF" stroke="#000" strokeWidth="2" />
      <g>
        <path d="M128 128 L128 13 A115 115 0 0 1 209.3 46.7 Z" fill="#FFB300" />
        <path d="M128 128 L209.3 46.7 A115 115 0 0 1 243 128 Z" fill="#FF7043" />
        <path d="M128 128 L243 128 A115 115 0 0 1 209.3 209.3 Z" fill="#E53935" />
        <path d="M128 128 L209.3 209.3 A115 115 0 0 1 128 243 Z" fill="#8E24AA" />
        <path d="M128 128 L128 243 A115 115 0 0 1 46.7 209.3 Z" fill="#3949AB" />
        <path d="M128 128 L46.7 209.3 A115 115 0 0 1 13 128 Z" fill="#1E88E5" />
        <path d="M128 128 L13 128 A115 115 0 0 1 46.7 46.7 Z" fill="#00897B" />
        <path d="M128 128 L46.7 46.7 A115 115 0 0 1 128 13 Z" fill="#43A047" />
      </g>
      <circle cx="128" cy="128" r="70" fill="white" />
      <path d="M30 128 Q 78 40, 128 128 T 226 128" stroke="#1565C0" strokeWidth="6" fill="none" />
    </svg>
  );
}

function SeabornIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="13" width="3.5" height="9" rx="0.5" fill="#5B8FF9" />
      <rect x="6.5" y="9" width="3.5" height="13" rx="0.5" fill="#6FC2C9" />
      <rect x="11" y="5" width="3.5" height="17" rx="0.5" fill="#F6BD16" />
      <rect x="15.5" y="10" width="3.5" height="12" rx="0.5" fill="#E8684A" />
      <rect x="20" y="14" width="3" height="8" rx="0.5" fill="#9270CA" />
    </svg>
  );
}

function PythonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pyBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="pyYellow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE052" />
          <stop offset="100%" stopColor="#FFC331" />
        </linearGradient>
      </defs>
      <path fill="url(#pyBlue)" d="M126.9 8c-26 .1-24.3 11.4-24.3 11.4l.1 11.7h24.7v3.5H92.9s-16.6-1.9-16.6 24.1 14.5 25 14.5 25h8.6V70.5s-.5-14.6 14.3-14.6h24.6s13.8.2 13.8-13.4V21.6S153.2 8 126.9 8zm-13.6 7.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z"/>
      <path fill="url(#pyYellow)" d="M127.7 246.3c26 0 24.3-11.3 24.3-11.3l-.1-11.7h-24.7v-3.5h34.5s16.6 1.9 16.6-24.1-14.5-25-14.5-25h-8.6v12.2s.5 14.6-14.3 14.6h-24.6s-13.8-.2-13.8 13.4v22.9S101.5 246.3 127.7 246.3zm13.6-7.8a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/>
    </svg>
  );
}

function LogoImage({ src, className }: { src: string; className?: string }) {
  return (
    <img src={src} alt="" aria-hidden className={`${className ?? ""} object-contain`} loading="lazy" />
  );
}

const logoIcons: Record<string, string> = {
  pandas: pandasLogo,
  numpy: numpyLogo,
  mysql: mysqlLogo,
  scikitlearn: scikitLearnLogo,
  ollama: ollamaLogo,
  plotly: plotlyLogo,
  python: pythonLogo,
};

const brandIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  excel: ExcelIcon,
  powerbi: PowerBIIcon,
  vscode: VSCodeIcon,
  matplotlib: MatplotlibIcon,
  seaborn: SeabornIcon,
  python: PythonIcon,
  ...Object.fromEntries(
    Object.entries(logoIcons).map(([name, src]) => [
      name,
      ({ className }: { className?: string }) => <LogoImage src={src} className={className} />,
    ]),
  ),
};

export { brandIcons };
