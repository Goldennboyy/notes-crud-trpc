import Head from "next/head";
import React from "react";

interface rootLayoutProps {
  children: React.ReactNode;
  page: string;
}

function Layout({ children, page }: rootLayoutProps) {
  return (
    <html lang="fr">
      <Head>
        <title>{page}</title>
      </Head>
      <body>
        <div className="container mx-auto min-h-screen max-w-5xl items-center justify-center px-6">
          {children}
        </div>
      </body>
      {/* probably add a footer in the end maybe */}
    </html>
  );
}

export default Layout;
