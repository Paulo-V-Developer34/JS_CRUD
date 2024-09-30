export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <h1 className="header-title">Cadastro de clientes</h1>
        <main>
            {children}
        </main>
      </>
    );
  }