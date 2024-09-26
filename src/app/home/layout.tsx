export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <h1>Cadastro de clientes</h1>
        <main>
            {children}
        </main>
      </>
    );
  }