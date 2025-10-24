# Site Profissional — Jorge Nunes

Site institucional responsivo e otimizado para SEO, desenvolvido para **Jorge Gustavo Nunes Oliveira**, especialista em criação de sites para profissionais liberais e pequenas empresas em **Bangu, Rio de Janeiro**.

✅ Foco em conversão (formulário + WhatsApp)  
✅ Totalmente estático (HTML/CSS/JS puro)  
✅ Mobile-first, acessível e rápido (Lighthouse ≥ 90)  
✅ LGPD-compatível (Política de Privacidade e Termos)

---

## 📁 Estrutura do Projeto

/seu-site/
├── index.html # Página Home
├── servicos.html # Serviços detalhados
├── portfolio.html # Projetos com lightbox
├── sobre.html # Sobre o profissional
├── contato.html # Formulário + WhatsApp
├── blog.html # Estrutura base para blog
├── politica-de-privacidade.html
├── termos.html
├── robots.txt
├── sitemap.xml
├── favicon.ico
├── css/
│ └── style.css # Estilos globais (mobile-first)
├── js/
│ └── main.js # Menu, modal, lightbox, formulário
└── img/ # Imagens em WebP (otimizadas)
├── portfolio-*.webp
├── jorge-nunes-foto.webp
└── whatsapp-icon.svg


---

## 🚀 Deploy

Este site é **estático** e pode ser hospedado em qualquer provedor gratuito ou pago:

### Opções recomendadas:
- **[Netlify](https://netlify.com)** (gratuito, com forms e SSL automático)
- **[Vercel](https://vercel.com)**
- **[GitHub Pages](https://pages.github.com)**
- **[Cloudflare Pages](https://pages.cloudflare.com)**

### Passos básicos (ex: Netlify):
1. Faça push deste projeto para um repositório no GitHub.
2. Acesse [Netlify](https://app.netlify.com) e clique em **"New site from Git"**.
3. Selecione o repositório.
4. Deixe as configurações padrão (`Build command`: vazio, `Publish directory`: `/`).
5. Clique em **Deploy**.

> ✅ Seu site estará online em minutos com HTTPS automático.

---

## 📝 Configurações Necessárias Antes do Lançamento

1. **Substitua todos os `https://SEU-DOMINIO-AQUI`** pelo seu domínio real:
   - Em `index.html`, `servicos.html`, `portfolio.html`, etc.
   - Em `sitemap.xml` e `robots.txt`
   - No JSON-LD (schema) da Home

2. **Atualize o endpoint do formulário** (em `contato.html`):
   - Cadastre-se em [Formspree.io](https://formspree.io)
   - Substitua `action="https://formspree.io/f/YOUR-FORM-ID"` pelo seu endpoint real
   - Ou use **Netlify Forms** (basta adicionar `netlify` ao `<form>`)

3. **Adicione sua foto real**:
   - Substitua `img/jorge-nunes-foto.webp` por uma imagem profissional (400x400px, WebP)

4. **Gere favicons**:
   - Use [realfavicongenerator.net](https://realfavicongenerator.net) e substitua `favicon.ico` e tags relacionadas

5. **Ative o Google Analytics (opcional)**:
   - Descomente o script no `<head>` de todas as páginas
   - Substitua `G-XXXXXXXXXX` pelo seu Measurement ID do GA4

---

## ✅ Checklist de SEO Pré-Lançamento

- [ ] Meta titles (50–60 caracteres) em todas as páginas
- [ ] Meta descriptions (120–160 caracteres)
- [ ] Open Graph + Twitter Cards configurados
- [ ] Schema.org JSON-LD na Home (ProfessionalService)
- [ ] `robots.txt` permitindo indexação
- [ ] `sitemap.xml` com todas as URLs e submetido ao Google Search Console
- [ ] URLs amigáveis e sem duplicação
- [ ] Imagens com `alt` descritivo e nomes semânticos (`portfolio-dentista.webp`)
- [ ] H1 único por página
- [ ] NAP consistente (Nome, Endereço, Telefone) no footer e schema
- [ ] Versão mobile testada (Chrome DevTools)
- [ ] Lighthouse ≥ 90 (Performance, Acessibilidade, SEO)

---

## 📞 Contato do Projeto

- **Desenvolvedor**: Jorge Gustavo Nunes Oliveira  
- **E-mail**: jgnunes@gmail.com  
- **WhatsApp**: [+55 21 99743-9311](https://wa.me/5521997439311)  
- **Local**: Bangu, Rio de Janeiro — RJ

---
