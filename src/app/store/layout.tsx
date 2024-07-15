export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Navegacion de las Categorias</nav>
      {children}
    </main>
  );
}