import { redirect } from 'next/navigation';

export default function RootRedirect() {
  // Force the default locale route during development
  redirect('/pt-BR');
}
