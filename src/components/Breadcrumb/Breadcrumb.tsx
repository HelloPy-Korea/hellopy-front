import * as React from "react";

interface BreadcrumbProps extends React.ComponentProps<"nav"> {
  children: React.ReactNode;
  separator?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
  separator = ">",
  ...props
}) => {
  const crumbs = React.Children.toArray(children);
  return (
    <nav aria-label="breadcrumb" {...props}>
      <ol className="flex flex-wrap items-center gap-1 break-words text-base dark:text-white">
        {crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <li>{crumb}</li>
            {index < crumbs.length - 1 && (
              <li className="px-1.5">{separator}</li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
