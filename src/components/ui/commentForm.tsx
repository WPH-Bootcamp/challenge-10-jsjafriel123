'use client';
import { Textarea } from './textarea';
import { Field, FieldLabel } from './field';
import { Button } from './button';

export default function CommentForm() {
  return (
    <section className='flex max-h-[242px] w-full flex-col gap-6 lg:max-h-[296px]'>
      <Field>
        <FieldLabel htmlFor='comment' className='text-sm font-semibold'>
          Give your Comments
        </FieldLabel>
        <Textarea
          id='comment'
          placeholder='Enter your comment'
          break-word='true'
          className='radius-xl h-[140px] w-full gap-2 px-4 py-2'
        />
      </Field>

      <Button
        type='submit'
        className='bg-primary-300 flex h-12 w-full self-center rounded-full lg:w-[204px] lg:self-end'
      >
        Send
      </Button>
    </section>
  );
}
