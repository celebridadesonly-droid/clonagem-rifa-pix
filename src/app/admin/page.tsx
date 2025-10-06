'use client'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          🔐 Painel Administrativo
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Bem-vindo ao Admin</h2>
            <p className="text-gray-600 mb-6">
              Sistema de administração da raspadinha online
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">📊 Dashboard</h3>
                <p className="text-gray-600">Métricas e estatísticas</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">👥 Compradores</h3>
                <p className="text-gray-600">Gerenciar usuários</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">🎫 Raspadinhas</h3>
                <p className="text-gray-600">Configurar prêmios</p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">💳 Pagamentos</h3>
                <p className="text-gray-600">Gateway PIX</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="/admin/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block transition-colors"
              >
                Fazer Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}