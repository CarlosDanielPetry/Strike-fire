//import React from 'react';
import Button from '../../../components/UI/Button';
import { useRouter } from 'next/navigation';

const LoginScreen = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-lighter">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-heading font-bold text-gray-dark text-center mb-6">Entrar</h1>
        <p className="text-gray-medium text-center mb-8">Acesse sua conta para gerenciar sua assinatura, fazer reservas e muito mais.</p>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-dark font-medium mb-2">
              Endereço de Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="block text-gray-dark font-medium">
                Senha
              </label>
              <a href="#" className="text-sm text-primary hover:text-primary-dark">
                Esqueceu a Senha?
              </a>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Escolha uma senha segura"
              className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <Button type="submit" fullWidth>
            Entrar
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-medium">Ainda não tem uma conta?</p>
          <Button variant="outline" onClick={() => router.push('/Auth/Registros/RegistrationScreen')}>
            Registrar-se Agora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;