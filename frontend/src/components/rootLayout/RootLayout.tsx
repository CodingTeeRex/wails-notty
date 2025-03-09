import type { FC, ReactNode } from 'react';

type RootLayoutProps = { children: ReactNode };

const RootLayout: FC<RootLayoutProps> = ({ children }: RootLayoutProps) => {
    return <div id='app'>{children}</div>;
};

export default RootLayout;
