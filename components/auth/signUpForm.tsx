'use client';
import React from 'react';
import SignupSchema from '@/schemas/SignupSchema';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { signup } from '@/actions/signup';
import { cn } from '@/lib/utils';
import { BsExclamationTriangleFill } from 'react-icons/bs';
import { HiCheckCircle } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

interface FormRes {
  error?: string;
  success?: string;
}

const SignUpForm = () => {
  const router = useRouter();
  const [formRes, setFormRes] = React.useState<FormRes | null>(null);
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = async (data: z.infer<typeof SignupSchema>, role: "STUDENT" | "TEACHER") => {
    const res = await signup(data, role);
    if (res) setFormRes(res);
    if(res.success) router.push('/auth/signin');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => onSubmit(data, 'STUDENT'))}
        className="space-y-2.5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="John doe"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Photo URL</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="url"
                  placeholder="valid photo url..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
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
            Create an account
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
