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
        {/* probably add a link */}
      </Head>
      <body>{children}</body>
      {/* probably add a footer in the end maybe */}
    </html>
  );
}

export default Layout;
