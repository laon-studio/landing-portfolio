'use client';

import {
  FormProvider,
  RegisterOptions,
  SubmitHandler,
  useForm,
  useFormContext,
} from 'react-hook-form';

interface IFormData {
  fullName: string;
  email: string;
  phone?: string;
  money: string;
}

const OptInForm = () => {
  const methods = useForm<IFormData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ?? '',
        {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(data),
        }
      ).then((res) => res.text());

      if (response === 'success') {
        methods.reset(); // react-hook-form 방식으로 폼 초기화
        alert('Success');
      } else {
        alert('Failed... Try again later');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed... Try again later');
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className='flex flex-col gap-4 h-full'
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
      >
        <div>
          <label htmlFor='fullName' className='flex text-xs'>
            <span>FULL NAME</span> <IconRequired />
          </label>
          <OptInInput
            type='text'
            id='fullName'
            name='fullName'
            required
            placeholder='Your full name'
            rules={{ required: 'Please complete this required field.' }}
          />
        </div>
        <div>
          <label htmlFor='email' className='flex text-xs'>
            <span>EMAIL</span> <IconRequired />
          </label>
          <OptInInput
            type='email'
            id='email'
            name='email'
            required
            placeholder='Your email'
            rules={{
              required: 'Please complete this required field.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address.',
              },
            }}
          />
        </div>
        <div>
          <label htmlFor='phone' className='flex text-xs'>
            <span>PHONE</span> <IconRequired />
          </label>
          <OptInInput
            type='text'
            id='phone'
            name='phone'
            placeholder='Your phone number'
            rules={{
              required: 'Please complete this required field.',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Please enter a valid phone number.',
              },
            }}
          />
        </div>
        <div>
          <label htmlFor='money' className='flex text-xs'>
            READY TO MOVE MONEY?
          </label>
          <select
            id='money'
            defaultValue=''
            {...methods.register('money')}
            className='w-full h-10 bg-[#f5f8fa] px-[15px] border border-[#cbd6e2] rounded-[15px] mt-1'
          >
            <option value='' disabled>
              Select your timeframe
            </option>
            <option value='lt-1'>&lt; 1 Month</option>
            <option value='1-3'>1 Month – 3 Months</option>
            <option value='3-6'>3 Months – 6 Months</option>
          </select>
        </div>
        <div className='mt-auto'>
          <button
            className='bg-primary px-6 py-3 rounded-xl text-xs font-bold'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default OptInForm;

type OptInInputProps<K extends keyof IFormData> = {
  name: K;
  rules?: RegisterOptions<IFormData, K>;
} & Omit<React.ComponentProps<'input'>, 'name'>;

const OptInInput = <K extends keyof IFormData>({
  type,
  id,
  name,
  required,
  placeholder,
  rules,
}: OptInInputProps<K>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormData>();

  return (
    <div>
      <input
        type={type}
        id={id}
        required={required}
        placeholder={placeholder}
        {...register(name, rules)}
        className='w-full h-10 bg-[#f5f8fa] px-[15px] border border-[#cbd6e2] rounded-[15px] mt-1'
      />
      {errors[name] && <p className='text-red-500'>{errors[name]?.message}</p>}
    </div>
  );
};

const IconRequired = () => {
  return <span className='text-red-500'>*</span>;
};
