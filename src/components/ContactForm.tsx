'use client';

import { Button, Card, CardContent, Heading, Input, Paragraph, Select, Textarea } from '@/components/ui';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  legalArea: string;
  urgency: string;
  companyName?: string;
  message: string;
  acceptPrivacy: boolean;
  preferredContact: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  legalArea?: string;
  message?: string;
  acceptPrivacy?: string;
}

export default function ContactForm() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    legalArea: '',
    urgency: '',
    companyName: '',
    message: '',
    acceptPrivacy: false,
    preferredContact: 'email'
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const legalAreaOptions = [
    { value: '', label: 'Selecione sua área de interesse', disabled: true },
    { value: 'defesas-ambientais', label: 'Defesas e Recursos Ambientais' },
    { value: 'licenciamento', label: 'Licenciamento e Regularização' },
    { value: 'consultoria-ambiental', label: 'Consultoria Jurídica Ambiental' },
    { value: 'direito-empresarial', label: 'Direito Empresarial' },
    { value: 'outros', label: 'Outros assuntos jurídicos' }
  ];

  const urgencyOptions = [
    { value: '', label: 'Qual a urgência do seu caso?', disabled: true },
    { value: 'muito-urgente', label: 'Muito urgente (prazo vencendo)' },
    { value: 'urgente', label: 'Urgente (em alguns dias)' },
    { value: 'normal', label: 'Normal (algumas semanas)' },
    { value: 'planejamento', label: 'Planejamento (sem pressa)' }
  ];

  const contactOptions = [
    { value: 'email', label: 'E-mail' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'telefone', label: 'Telefone' }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }

    if (!formData.legalArea) {
      newErrors.legalArea = 'Selecione uma área jurídica';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Descreva sua necessidade jurídica';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Descrição muito curta (mínimo 10 caracteres)';
    }

    if (!formData.acceptPrivacy) {
      newErrors.acceptPrivacy = 'Aceite a política de privacidade';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          legalArea: '',
          urgency: '',
          companyName: '',
          message: '',
          acceptPrivacy: false,
          preferredContact: 'email'
        });
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card variant="paper" className="w-full max-w-2xl mx-auto shadow-lg">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <Heading level={3} className="mb-4 text-[var(--color-primary-500)]">
            Fale com Nossos Especialistas
          </Heading>
          <Paragraph color="muted">
            Preencha o formulário e receba uma consulta personalizada sobre sua necessidade jurídica
          </Paragraph>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <Paragraph className="text-green-800 font-medium">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </Paragraph>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <Paragraph className="text-red-800 font-medium">
                Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.
              </Paragraph>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dados Pessoais */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Nome completo"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              error={errors.name}
              required
            />

            <Input
              label="E-mail"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={errors.email}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Telefone/WhatsApp"
              type="tel"
              placeholder="(47) 99999-9999"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              error={errors.phone}
              required
            />

            <Input
              label="Empresa (opcional)"
              placeholder="Nome da sua empresa"
              value={formData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
            />
          </div>

          {/* Área Jurídica e Urgência */}
          <div className="grid md:grid-cols-2 gap-6">
            <Select
              label="Área jurídica de interesse"
              options={legalAreaOptions}
              value={formData.legalArea}
              onChange={(e) => handleInputChange('legalArea', e.target.value)}
              error={errors.legalArea}
              required
            />

            <Select
              label="Urgência do caso"
              options={urgencyOptions}
              value={formData.urgency}
              onChange={(e) => handleInputChange('urgency', e.target.value)}
            />
          </div>

          {/* Forma de Contato Preferida */}
          <div>
            <label className="block text-sm font-austera-medium text-[var(--color-foreground)] mb-3">
              Como prefere ser contatado?
            </label>
            <div className="flex gap-4">
              {contactOptions.map((option) => (
                <label key={option.value} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value={option.value}
                    checked={formData.preferredContact === option.value}
                    onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                    className="w-4 h-4 text-[var(--color-primary-500)] border-[var(--color-neutral-300)] focus:ring-[var(--color-primary-500)] focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-[var(--color-foreground)]">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Descrição do Caso */}
          <Textarea
            label="Descreva sua necessidade jurídica"
            placeholder="Conte-nos detalhes sobre seu caso, dúvidas ou necessidades jurídicas..."
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            error={errors.message}
            maxLength={1000}
            showCharCount
            required
            helperText="Seja específico para recebermos uma orientação mais precisa"
          />

          {/* Política de Privacidade */}
          <div>
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={formData.acceptPrivacy}
                onChange={(e) => handleInputChange('acceptPrivacy', e.target.checked)}
                className="w-4 h-4 mt-1 text-[var(--color-primary-500)] border-[var(--color-neutral-300)] rounded focus:ring-[var(--color-primary-500)] focus:ring-2"
              />
              <span className="ml-3 text-sm text-[var(--color-foreground)]">
                Concordo em compartilhar meus dados para receber contato da Farias Klug Advocacia e entendo que posso cancelar a qualquer momento.
                {errors.acceptPrivacy && (
                  <span className="block text-red-600 mt-1">{errors.acceptPrivacy}</span>
                )}
              </span>
            </label>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                'Enviar Mensagem'
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => window.open('https://wa.me/5547999999999?text=Olá! Gostaria de uma consulta jurídica.', '_blank')}
              className="flex-1 sm:flex-initial"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
