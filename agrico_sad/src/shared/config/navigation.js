export const marketingMenuItems = [
  { href: '/', id: 'home', label: 'Inicio' },
  { href: '/#recursos', id: 'recursos', label: 'Recursos' },
  { href: '/#como-funciona', id: 'como-funciona', label: 'Como funciona' },
  { href: '/#demonstracao', id: 'demonstracao', label: 'Demonstracao' },
  { href: '/#contato', id: 'contato', label: 'Contato' },
];

const dashboardMenus = {
  admin: [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/usuarios', label: 'Usuarios' },
    { href: '/analises', label: 'Analises' },
    { href: '/relatorios', label: 'Relatorios' },
    { href: '/configuracoes', label: 'Configuracoes' },
    { href: '/perfil', label: 'Perfil' },
  ],
  tecnico: [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/analises', label: 'Analises' },
    { href: '/relatorios', label: 'Relatorios' },
    { href: '/perfil', label: 'Perfil' },
  ],
};

export function getDashboardMenu(userType) {
  return dashboardMenus[userType] ?? dashboardMenus.tecnico;
}
