//import React from 'react';
import Button from '../../../components/UI/Button';
import { useRouter } from 'next/navigation';

const RegistrationScreen = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-lighter">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-heading font-bold text-gray-dark text-center mb-6">Registrar-se</h1>
        <p className="text-gray-medium text-center mb-8">Crie uma nova conta para começar a usar nossos serviços.</p>

        <form className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-dark font-medium mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Digite seu nome completo"
              className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

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
            <label htmlFor="password" className="block text-gray-dark font-medium mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Escolha uma senha segura"
              className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-gray-dark font-medium mb-2">
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              className="w-full px-4 py-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <Button type="submit" fullWidth>
            Registrar-se
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-medium">Já possui uma conta?</p>
          <Button variant="outline" onClick={() => router.push('/Auth/Login/LoginScreen')}>
            Fazer login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationScreen;