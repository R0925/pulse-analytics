import { useTranslations } from 'next-intl';
import { DarkModeToggle } from '@/components/shared/darkModeToggle';
export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <DarkModeToggle />
    </div>
  );
}
