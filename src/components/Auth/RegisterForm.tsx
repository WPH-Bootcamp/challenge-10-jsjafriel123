'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/lib/auth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [showPassword, setShowPassword] = useState(false);
  // const [showConfPassword, setShowConfPassword] = useState(false);

  // Password Validation
  const showMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;

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
          await registerUser({
            name: formData.get('name') as string,
            username: formData.get('username') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
          });

          // When successful, go to login
          router.push('/login');
        } catch (err: any) {
          console.log(err?.response?.data?.message);
          setError(
            err?.response?.data?.message ??
              'Registration failed. Please try again.'
          );
        } finally {
          setLoading(false);
        }
      }}
      className='border-[#E9EAEB flex h-[598px] w-[345px] flex-col gap-5 rounded-xl border p-6 text-[#181D27]'
    >
      <h2 className='text-[20px]/[34px] font-bold'>Sign Up</h2>
      <div className='flex flex-col gap-1'>
        <Label htmlFor='name'>
          Name<span className='text-red-500'>*</span>
        </Label>
        <Input
          id='name'
          name='name'
          type='text'
          placeholder='Enter your name'
          required
          className='h-12'
        />
        <p className='hidden text-[12px]/[24px] text-[#EE1D52]'>
          Error Text Helper
        </p>
      </div>
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

      <div className='relative flex flex-col gap-1'>
        <Label htmlFor='password'>
          Password<span className='text-red-500'>*</span>
        </Label>
        <Input
          id='password'
          name='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password'
          value={password}
          required
          className='h-12'
        />
        <p className='hidden text-[12px]/[24px] text-[#EE1D52]'>
          Error Text Helper
        </p>
      </div>

      <div className='flex flex-col gap-1'>
        <Label htmlFor='password2'>
          Confirm Password<span className='text-red-500'>*</span>
        </Label>
        <Input
          id='password2'
          name='password2'
          type='password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Enter your confirm password'
          value={confirmPassword}
          required
          className={`h-12 ${showMismatch ? 'border-[#EE1D52] focus-visible:ring-[#EE1D52]' : ''}`}
        />
        <p
          className={`${showMismatch ? 'block' : 'hidden'} text-[12px]/[24px] text-[#EE1D52]`}
        >
          Password not matched
        </p>
      </div>
      {error && <p className='text-sm text-red-500'>{error}</p>}
      <Button
        type='submit'
        disabled={loading || showMismatch}
        className='h-12 rounded-full bg-[#0093DD] disabled:cursor-not-allowed disabled:opacity-50'
      >
        {loading ? 'Creating account…' : 'Register'}
      </Button>
      <span className='w-full text-center'>
        Already have an account?{' '}
        <Link
          href='/login'
          className='text-[14px]/[28px] font-semibold text-[#0093DD]'
        >
          Log in
        </Link>{' '}
      </span>
    </form>
  );
}
