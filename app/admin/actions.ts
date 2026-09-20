'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData) {
  const password = formData.get('password');
  const adminPassword = process.env.ADMIN_PASSWORD || 'secret123';

  if (password === adminPassword) {
    const cookieStore = await cookies();
    cookieStore.set('niormedia_admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    redirect('/admin');
  } else {
    redirect('/admin?error=Invalid+Password');
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('niormedia_admin_session');
  redirect('/admin');
}
