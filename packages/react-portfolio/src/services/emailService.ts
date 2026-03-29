// Web3Forms Email Service
// Free tier: 250 submissions/month
// Get your access key at: https://web3forms.com/

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WEB3FORMS_ACCESS_KEY = (import.meta as any).env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';

export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        ...data,
        from_name: data.name,
        to: 'brunovx6@gmail.com',
        botcheck: false,
      }),
    });

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
