interface ContainerProps {
  children: React.ReactNode;
}

/**
    Componente de Container que envolve o conteúdo da página para centralizar e adicionar margem
    @param {React.ReactNode} children - Conteúdo da página
    @returns {React.ReactNode} - Container com margem e conteúdo
*/
function Container({ children }: ContainerProps): React.ReactNode {
  return <div className="container mx-auto py-4">{children}</div>;
}

export { Container };
