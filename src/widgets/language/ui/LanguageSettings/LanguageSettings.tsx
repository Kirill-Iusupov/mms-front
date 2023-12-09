import { FC } from 'react';

import { SetLocaleView } from '~features/locale';

export interface LanguageSettingsProps extends Partial<ComponentWithChild> {}

export const LanguageSettings: FC<LanguageSettingsProps> = () => {
  return <SetLocaleView />;
};
