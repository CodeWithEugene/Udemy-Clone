import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children, className, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.hash.substring(1) !== href) {
        window.location.hash = href;
    }
  };

  return (
    <a href={`#${href}`} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

export default Link;