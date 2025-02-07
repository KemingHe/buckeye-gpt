// NOTE: Must use default export, otherwise will warning at Next.js build time.
import pkg from '@/package.json';

export const getVersion = (): string => pkg.version;
