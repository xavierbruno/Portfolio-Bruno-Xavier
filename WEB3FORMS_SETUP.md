# 📧 Configuração do Web3Forms para Email

## Como configurar o formulário de contato:

### 1. Acesse Web3Forms

Vá para https://web3forms.com/

### 2. Crie sua Access Key GRATUITA

- Clique em "Get Access Key"
- Digite o email: **brunovx6@gmail.com**
- Você receberá uma Access Key no seu email

### 3. Configure a Access Key

Edite o arquivo `.env.local` em `packages/react-portfolio/.env.local`:

```env
VITE_WEB3FORMS_KEY=SUA_ACCESS_KEY_AQUI
```

### 4. Reinicie o servidor

```bash
# Pare o servidor (Ctrl+C)
# Reinicie
pnpm dev:react
```

## ✅ Pronto!

- O formulário enviará emails para **brunovx6@gmail.com**
- **250 emails gratuitos por mês**
- Sem necessidade de servidor backend
- Funciona em produção (Vercel, Netlify, etc.)

## 🎨 Recursos implementados:

- ✅ Formulário de contato funcional
- ✅ Validação de campos
- ✅ Feedback visual (loading/success/error)
- ✅ Toast notifications
- ✅ Informações de contato atualizadas

## 📱 Contatos configurados:

- Email: brunovx6@gmail.com
- Telefone: +55 21 99706-4277
- GitHub: https://github.com/xavierbruno
- LinkedIn: https://www.linkedin.com/in/brunovx6/
- Instagram: https://www.instagram.com/brunoxavier6/

---

**Nota:** Sem a Access Key configurada, o formulário mostrará erro ao tentar enviar. Configure a key para funcionar!
