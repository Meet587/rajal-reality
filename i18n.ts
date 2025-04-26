
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
// Removed incorrect import of getRequestLocale which is not needed here.

// Can be imported from a shared config
const locales = ['en', 'gu'];

export default getRequestConfig(async ({locale}) => { // Receive locale as argument
  // Validate that the incoming `locale` parameter is valid
  // next-intl middleware handles this validation generally, but an explicit check adds robustness.
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale, // Explicitly return the locale
    messages: (await import(`./src/messages/${locale}.json`)).default // Adjust path to messages
  };
});

