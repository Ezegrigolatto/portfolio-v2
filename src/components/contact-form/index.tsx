'use client';
import { useTranslations } from 'next-intl';
import Loader from '../layout/loader';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm('xrbglkla');

  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h4 className="text-2xl font-bold mb-4">{t('ContactForm.title')}</h4>
      <h2 className="text-3xl font-semibold mb-8">{t('ContactForm.cta')}</h2>
      <p className="text-center text-gray-500">
        {t('ContactForm.description1')}
        <br />
        {t('ContactForm.description2')}
      </p>
      <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            {t('ContactForm.name')}
          </label>
          <Input name="name" id="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {t('ContactForm.email')}
          </label>
          <Input type="email" name="email" id="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            {t('ContactForm.message')}
          </label>
          <Textarea
            rows={4}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder={t('ContactForm.message-placeholder')}
            id="message"
            name="message"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <Button
          type="submit"
          variant={state.succeeded ? 'success' : 'default'}
          disabled={state.submitting}
          className="w-full py-2 px-4 font-semibold rounded-md"
        >
          {state.succeeded ? (
            t('ContactForm.submit-button-success')
          ) : state.submitting ? (
            <Loader />
          ) : (
            t('ContactForm.submit-button')
          )}
        </Button>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
};

export default ContactForm;
