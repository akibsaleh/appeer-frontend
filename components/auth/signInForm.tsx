'use client';
import React from 'react';
import SignInSchema from '@/schemas/SigninSchema';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { BsExclamationTriangleFill } from 'react-icons/bs';
import { HiCheckCircle } from 'react-icons/hi';
import signInAction from '@/actions/signin';

interface FormRes {
  error?: string;
  success?: string;
}

const SignInForm = () => {
  const [formRes, setFormRes] = React.useState<FormRes | null>(null);
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    const res = await signInAction(data);
    if (res) setFormRes(res);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2.5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="your@email.com"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {formRes && (
          <div className={cn(`w-full px-2.5 py-1.5 rounded-md`, formRes.error ? 'bg-destructive/10 text-destructive' : 'bg-emerald-600/10 text-success')}>
            <p className="p-0 m-0 flex items-center gap-x-1">
              {formRes?.error ? <BsExclamationTriangleFill className="w-4 h-4" /> : <HiCheckCircle className="w-5 h-5" />}
              <span>{formRes?.error ? formRes.error : formRes.success}</span>
            </p>
          </div>
        )}
        <div className="pt-2.5 flex justify-center">
          <Button
            type="submit"
            size={'lg'}>
            Sign In
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
