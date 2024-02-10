// import useViewTransitionRouter from "@/hooks/useViewTransitionRouter";
// import NextLink, { LinkProps as NextLinkProps } from "next/link";

// type AnchorProps = Omit<
//   React.AnchorHTMLAttributes<HTMLAnchorElement>,
//   keyof NextLinkProps
// >;

// interface LinkProps extends AnchorProps, NextLinkProps {
//   children: React.ReactNode;
// }

// const Link: React.FC<LinkProps> = ({ ...props }) => {
//   const router = useViewTransitionRouter();

//   const handleLinkClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault();

//     router.push(props.href.toString())
//   };

//   return <NextLink {...props} onClick={handleLinkClick} />;
// };

// export default Link;