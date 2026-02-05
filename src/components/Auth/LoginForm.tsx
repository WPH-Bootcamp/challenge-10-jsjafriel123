'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { loginUser } from '@/lib/auth';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const redirectTo = searchParams.get('redirect') || '/';

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const form = e.currentTarget;

        if (!form.checkValidity()) {
          form.reportValidity(); // show browser messages
          return;
        }
        const formData = new FormData(e.currentTarget);
        try {
          const res = await loginUser({
            email: formData.get('email') as string,
            password: formData.get('password') as string,
          });

          // Token
          localStorage.setItem('token', res.token);

          // Redirect after login
          router.replace(redirectTo);
        } catch (err: any) {
          setError(err?.response?.data?.message ?? 'Invalid email or password');
        } finally {
          setLoading(false);
        }
      }}
      className='border-[#E9EAEB flex h-[398px] w-[345px] flex-col gap-5 rounded-xl border p-6 text-[#181D27]'
    >
      <h2 className='text-[20px]/[34px] font-bold'>Sign In</h2>
      <div className='flex flex-col gap-1'>
        <Label htmlFor='email'>
          Email<span className='text-red-500'>*</span>
        </Label>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='Enter your email'
          required
          className='h-12'
        />
        <p className='hidden text-[12px]/[24px] text-[#EE1D52]'>
          Error Text Helper
        </p>
      </div>

      <div className='flex flex-col gap-1'>
        <Label htmlFor='password'>
          Password<span className='text-red-500'>*</span>
        </Label>
        <Input
          id='password'
          name='password'
          type='password'
          placeholder='Enter your password'
          required
          className='h-12'
        />
        <p className='hidden text-[12px]/[24px] text-[#EE1D52]'>
          Error Text Helper
        </p>
      </div>

      {error && <p className='text-sm text-red-500'>{error}</p>}
      <Button
        type='submit'
        disabled={loading}
        className='h-12 rounded-full bg-[#0093DD]'
      >
        {loading ? 'Wait…' : 'Login'}
      </Button>
      <span className='w-full text-center'>
        Don't have an account?{' '}
        <Link
          href='/register'
          className='text-[14px]/[28px] font-semibold text-[#0093DD]'
        >
          Register
        </Link>{' '}
      </span>
    </form>
  );
}
