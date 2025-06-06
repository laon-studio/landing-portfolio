'use client';

import { FormEvent, FormEventHandler, useRef } from 'react';

const OptInForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent
  ) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const objData: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        objData[key] = value;
      }
    });
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ?? '',
        {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(objData),
        }
      )
        .then((res) => res.text())
        .then((text) => text);

      console.log({ response });

      if (response === 'success') {
        (e.target as HTMLFormElement).reset();
        alert('Success');
        return;
      } else {
        alert('Failed... Try again later');
        return;
      }
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
      alert('Failed... Try again later');
    }
  };

  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={handleOnSubmit}
      ref={formRef}
    >
      <div>
        <label htmlFor='fullName'>
          <span>FULL NAME</span> <IconRequired />
        </label>
        <OptInInput
          type='text'
          id='fullName'
          name='fullName'
          required
          placeholder='Your full name'
        />
      </div>
      <div>
        <label htmlFor='email'>
          <span>EMAIL</span> <IconRequired />
        </label>
        <OptInInput
          type='email'
          id='email'
          name='email'
          required
          placeholder='Your email'
        />
      </div>
      <div>
        <label htmlFor='phone'>
          <span>PHONE</span> <IconRequired />
        </label>
        <OptInInput
          type='tel'
          id='phone'
          name='phone'
          placeholder='Your phone number'
        />
      </div>
      <div>
        <label htmlFor='money'>READY TO MOVE MONEY?</label>
        <select
          id='money'
          name='money'
          defaultValue=''
          className='w-full h-10 bg-[#f5f8fa] px-[15px] border border-[#cbd6e2] rounded-[15px]'
        >
          <option value='' disabled>
            Select your timeframe
          </option>
          <option value='lt-1'>&lt; 1 Month</option>
          <option value='1-3'>1 Month – 3 Months</option>
          <option value='3-6'>3 Months – 6 Months</option>
        </select>
      </div>
      <div>
        <button className='bg-primary px-6 py-3 rounded-xl' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default OptInForm;

const OptInInput = ({
  type,
  id,
  name,
  required,
  placeholder,
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      placeholder={placeholder}
      className='w-full h-10 bg-[#f5f8fa] px-[15px] border border-[#cbd6e2] rounded-[15px]'
    />
  );
};

const IconRequired = () => {
  return <span className='text-red-500'>*</span>;
};
