import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
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

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validação básica
    if (!body.name || !body.email || !body.phone || !body.legalArea || !body.message || !body.acceptPrivacy) {
      return NextResponse.json(
        { error: 'Dados obrigatórios não preenchidos' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Mapear área jurídica para nome legível
    const legalAreaMap: Record<string, string> = {
      'defesas-ambientais': 'Defesas e Recursos Ambientais',
      'licenciamento': 'Licenciamento e Regularização',
      'consultoria-ambiental': 'Consultoria Jurídica Ambiental',
      'direito-empresarial': 'Direito Empresarial',
      'outros': 'Outros assuntos jurídicos'
    };

    const urgencyMap: Record<string, string> = {
      'muito-urgente': 'Muito urgente (prazo vencendo)',
      'urgente': 'Urgente (em alguns dias)',
      'normal': 'Normal (algumas semanas)',
      'planejamento': 'Planejamento (sem pressa)'
    };

    const contactMap: Record<string, string> = {
      'email': 'E-mail',
      'whatsapp': 'WhatsApp',
      'telefone': 'Telefone'
    };

    // Formatar dados para email
    const emailContent = `
📧 NOVO CONTATO - FARIAS KLUG ADVOCACIA

👤 DADOS PESSOAIS:
• Nome: ${body.name}
• E-mail: ${body.email}
• Telefone: ${body.phone}
${body.companyName ? `• Empresa: ${body.companyName}` : ''}

⚖️ INFORMAÇÕES JURÍDICAS:
• Área de interesse: ${legalAreaMap[body.legalArea] || body.legalArea}
${body.urgency ? `• Urgência: ${urgencyMap[body.urgency] || body.urgency}` : ''}
• Contato preferido: ${contactMap[body.preferredContact] || body.preferredContact}

📝 MENSAGEM:
${body.message}

⏰ Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
    `;

    // Log para desenvolvimento (em produção, integrar com serviço de email)
    console.log('📧 Novo contato recebido:', {
      name: body.name,
      email: body.email,
      legalArea: legalAreaMap[body.legalArea],
      timestamp: new Date().toISOString()
    });

    // Aqui você integraria com um serviço real de email como:
    // - Resend
    // - SendGrid
    // - Brevo (ex-Sendinblue)
    // - Formspree

    // Exemplo de integração com Resend:
    /*
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'contato@fariasklug.com.br',
        to: ['augusto@fariasklug.com.br'],
        subject: `🏛️ Novo contato: ${body.name} - ${legalAreaMap[body.legalArea]}`,
        text: emailContent,
        replyTo: body.email
      });
    }
    */

    // Aqui você também poderia integrar com CRM, Notion, Google Sheets, etc.

    return NextResponse.json({
      success: true,
      message: 'Contato enviado com sucesso! Entraremos em contato em breve.'
    });

  } catch (error) {
    console.error('Erro no formulário de contato:', error);

    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    );
  }
}

// Método GET para healthcheck
export async function GET() {
  return NextResponse.json({
    status: 'Contact API is working',
    timestamp: new Date().toISOString()
  });
}
